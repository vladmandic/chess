import * as fs from 'fs';
import { createInterface } from 'readline';
import { spawn, ChildProcess } from 'child_process';
import * as log from '@vladmandic/pilogger';
import type { Engine, Options } from './uci';

interface Callback { (lines: string, parent: Engine): void } // eslint-disable-line no-unused-vars

export const fatal = (msg: string) => {
  log.error('uci', msg);
  process.exit(1);
};

export class SFProcess {
  public instance: ChildProcess;
  private callback: Callback;
  private options: Options;

  constructor(parent: Engine, callback: Callback) {
    this.options = parent.options;
    this.callback = callback;
    if (!fs.existsSync(this.options.engine)) fatal(`engine not found: ${this.options.engine}`);
    if (!fs.statSync(this.options.engine).isFile()) fatal(`engine not valid: ${this.options.engine}`);
    this.instance = spawn(this.options.engine);
    if (!this.instance.stdout || !this.instance.stderr) return;
    const readlineOut = createInterface({ input: this.instance.stdout });
    readlineOut.on('line', (line) => {
      if (this.options.debug) log.debug('uci receive:', line);
      this.callback(line, parent);
    });
  }

  async init() {
    this.send('isready');
  }

  send(str: string) {
    if (this.options.debug) log.debug('uci send:', str);
    const ok = this.instance?.stdin?.writable && !this.instance.exitCode;
    if (ok) this.instance?.stdin?.write(`${str}\n`);
  }

  exit() {
    if (!this.instance || this.instance.exitCode) return; // already exited
    this.send('stop');
    this.send('quit');
    setTimeout(() => this.instance.kill('SIGTERM'), 10);
    setTimeout(() => this.instance.kill('SIGKILL'), 100);
  }
}

export class SFWasm {
  private instance;
  private callback: Callback;
  private options: Options;
  private parent: Engine;

  constructor(parent: Engine, callback: Callback) {
    this.options = parent.options;
    this.callback = callback;
    this.parent = parent;
  }

  async init() {
    const SF = await import(this.options.engine);
    if (global.fetch) delete global.fetch; // emscripten loader is not compatible with nodejs fetch
    this.instance = await SF.default(); // initialize wasm
    this.instance.addMessageListener((line) => {
      if (this.options.debug) log.debug('uci receive:', line);
      this.callback(line, this.parent);
    });
    this.instance.postMessage('isready');
  }

  send(str: string) {
    if (this.options.debug) log.debug('uci send:', str);
    if (this.instance) this.instance.postMessage(str);
  }

  exit() {
    if (!this.instance) return;
    this.send('stop');
    this.send('quit');
  }
}
