/*
  Chess
  homepage: <https://github.com/vladmandic/chess>
  author: <https://github.com/vladmandic>'
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/.pnpm/@vladmandic+pilogger@0.4.6/node_modules/@vladmandic/pilogger/dist/pilogger.js
var require_pilogger = __commonJS({
  "node_modules/.pnpm/@vladmandic+pilogger@0.4.6/node_modules/@vladmandic/pilogger/dist/pilogger.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var require_dayjs_min = __commonJS2({
      "node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/dayjs.min.js"(exports2, module22) {
        !function(t, e) {
          "object" == typeof exports2 && "undefined" != typeof module22 ? module22.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
        }(exports2, function() {
          "use strict";
          var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
            var r2 = String(t2);
            return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
          }, g = { s: m, z: function(t2) {
            var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
            return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
          }, m: function t2(e2, n2) {
            if (e2.date() < n2.date())
              return -t2(n2, e2);
            var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
            return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
          }, a: function(t2) {
            return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
          }, p: function(t2) {
            return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
          }, u: function(t2) {
            return void 0 === t2;
          } }, v = "en", D = {};
          D[v] = M;
          var p = function(t2) {
            return t2 instanceof _;
          }, S = function t2(e2, n2, r2) {
            var i2;
            if (!e2)
              return v;
            if ("string" == typeof e2) {
              var s2 = e2.toLowerCase();
              D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
              var u2 = e2.split("-");
              if (!i2 && u2.length > 1)
                return t2(u2[0]);
            } else {
              var a2 = e2.name;
              D[a2] = e2, i2 = a2;
            }
            return !r2 && i2 && (v = i2), i2 || !r2 && v;
          }, w = function(t2, e2) {
            if (p(t2))
              return t2.clone();
            var n2 = "object" == typeof e2 ? e2 : {};
            return n2.date = t2, n2.args = arguments, new _(n2);
          }, O = g;
          O.l = S, O.i = p, O.w = function(t2, e2) {
            return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
          };
          var _ = function() {
            function M2(t2) {
              this.$L = S(t2.locale, null, true), this.parse(t2);
            }
            var m2 = M2.prototype;
            return m2.parse = function(t2) {
              this.$d = function(t3) {
                var e2 = t3.date, n2 = t3.utc;
                if (null === e2)
                  return new Date(NaN);
                if (O.u(e2))
                  return new Date();
                if (e2 instanceof Date)
                  return new Date(e2);
                if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                  var r2 = e2.match(l);
                  if (r2) {
                    var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                    return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                  }
                }
                return new Date(e2);
              }(t2), this.$x = t2.x || {}, this.init();
            }, m2.init = function() {
              var t2 = this.$d;
              this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
            }, m2.$utils = function() {
              return O;
            }, m2.isValid = function() {
              return !(this.$d.toString() === $);
            }, m2.isSame = function(t2, e2) {
              var n2 = w(t2);
              return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
            }, m2.isAfter = function(t2, e2) {
              return w(t2) < this.startOf(e2);
            }, m2.isBefore = function(t2, e2) {
              return this.endOf(e2) < w(t2);
            }, m2.$g = function(t2, e2, n2) {
              return O.u(t2) ? this[e2] : this.set(n2, t2);
            }, m2.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }, m2.valueOf = function() {
              return this.$d.getTime();
            }, m2.startOf = function(t2, e2) {
              var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
                var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
                return r2 ? i2 : i2.endOf(a);
              }, l2 = function(t3, e3) {
                return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
              }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
              switch (h2) {
                case c:
                  return r2 ? $2(1, 0) : $2(31, 11);
                case f:
                  return r2 ? $2(1, M3) : $2(0, M3 + 1);
                case o:
                  var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
                  return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
                case a:
                case d:
                  return l2(g2 + "Hours", 0);
                case u:
                  return l2(g2 + "Minutes", 1);
                case s:
                  return l2(g2 + "Seconds", 2);
                case i:
                  return l2(g2 + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }, m2.endOf = function(t2) {
              return this.startOf(t2, false);
            }, m2.$set = function(t2, e2) {
              var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
              if (o2 === f || o2 === c) {
                var y2 = this.clone().set(d, 1);
                y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
              } else
                $2 && this.$d[$2](l2);
              return this.init(), this;
            }, m2.set = function(t2, e2) {
              return this.clone().$set(t2, e2);
            }, m2.get = function(t2) {
              return this[O.p(t2)]();
            }, m2.add = function(r2, h2) {
              var d2, $2 = this;
              r2 = Number(r2);
              var l2 = O.p(h2), y2 = function(t2) {
                var e2 = w($2);
                return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
              };
              if (l2 === f)
                return this.set(f, this.$M + r2);
              if (l2 === c)
                return this.set(c, this.$y + r2);
              if (l2 === a)
                return y2(1);
              if (l2 === o)
                return y2(7);
              var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
              return O.w(m3, this);
            }, m2.subtract = function(t2, e2) {
              return this.add(-1 * t2, e2);
            }, m2.format = function(t2) {
              var e2 = this, n2 = this.$locale();
              if (!this.isValid())
                return n2.invalidDate || $;
              var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
                return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
              }, c2 = function(t3) {
                return O.s(s2 % 12 || 12, t3, "0");
              }, d2 = n2.meridiem || function(t3, e3, n3) {
                var r3 = t3 < 12 ? "AM" : "PM";
                return n3 ? r3.toLowerCase() : r3;
              }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
              return r2.replace(y, function(t3, e3) {
                return e3 || l2[t3] || i2.replace(":", "");
              });
            }, m2.utcOffset = function() {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, m2.diff = function(r2, d2, $2) {
              var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
              return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
            }, m2.daysInMonth = function() {
              return this.endOf(f).$D;
            }, m2.$locale = function() {
              return D[this.$L];
            }, m2.locale = function(t2, e2) {
              if (!t2)
                return this.$L;
              var n2 = this.clone(), r2 = S(t2, e2, true);
              return r2 && (n2.$L = r2), n2;
            }, m2.clone = function() {
              return O.w(this.$d, this);
            }, m2.toDate = function() {
              return new Date(this.valueOf());
            }, m2.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }, m2.toISOString = function() {
              return this.$d.toISOString();
            }, m2.toString = function() {
              return this.$d.toUTCString();
            }, M2;
          }(), T = _.prototype;
          return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
            T[t2[1]] = function(e2) {
              return this.$g(e2, t2[0], t2[1]);
            };
          }), w.extend = function(t2, e2) {
            return t2.$i || (t2(e2, _, w), t2.$i = true), w;
          }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
            return w(1e3 * t2);
          }, w.en = D[v], w.Ls = D, w.p = {}, w;
        });
      }
    });
    var pilogger_exports = {};
    __export2(pilogger_exports, {
      access: () => access,
      accessFile: () => accessFile,
      assert: () => assert,
      blank: () => blank,
      client: () => client,
      clientFile: () => clientFile,
      configure: () => configure2,
      console: () => console,
      data: () => data4,
      debug: () => debug,
      error: () => error,
      fatal: () => fatal,
      header: () => header,
      headerJson: () => headerJson2,
      info: () => info2,
      logFile: () => logFile,
      options: () => options,
      print: () => print,
      ring: () => ring,
      state: () => state2,
      tags: () => tags,
      timed: () => timed,
      verbose: () => verbose,
      warn: () => warn2
    });
    module2.exports = __toCommonJS(pilogger_exports);
    var os2 = __toESM2(require("os"));
    var fs3 = __toESM2(require("fs"));
    var path2 = __toESM2(require("path"));
    var import_dayjs = __toESM2(require_dayjs_min());
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi = wrapAnsi16();
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = [...colorString].map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex)),
          enumerable: false
        },
        ansi256ToAnsi: {
          value: (code) => {
            if (code < 8) {
              return 30 + code;
            }
            if (code < 16) {
              return 90 + (code - 8);
            }
            let red;
            let green;
            let blue;
            if (code >= 232) {
              red = ((code - 232) * 10 + 8) / 255;
              green = red;
              blue = red;
            } else {
              code -= 16;
              const remainder = code % 36;
              red = Math.floor(code / 36) / 5;
              green = Math.floor(remainder / 6) / 5;
              blue = remainder % 6 / 5;
            }
            const value = Math.max(red, green, blue) * 2;
            if (value === 0) {
              return 30;
            }
            let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
            if (value === 2) {
              result += 60;
            }
            return result;
          },
          enumerable: false
        },
        rgbToAnsi: {
          value: (red, green, blue) => styles2.ansi256ToAnsi(styles2.rgbToAnsi256(red, green, blue)),
          enumerable: false
        },
        hexToAnsi: {
          value: (hex) => styles2.ansi256ToAnsi(styles2.hexToAnsi256(hex)),
          enumerable: false
        }
      });
      return styles2;
    }
    var ansiStyles = assembleStyles();
    var ansi_styles_default = ansiStyles;
    var import_node_process2 = __toESM2(require("process"), 1);
    var import_node_os = __toESM2(require("os"), 1);
    var import_node_tty = __toESM2(require("tty"), 1);
    function hasFlag(flag, argv = import_node_process2.default.argv) {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    }
    var { env } = import_node_process2.default;
    var flagForceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      flagForceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      flagForceColor = 1;
    }
    function envForceColor() {
      if ("FORCE_COLOR" in env) {
        if (env.FORCE_COLOR === "true") {
          return 1;
        }
        if (env.FORCE_COLOR === "false") {
          return 0;
        }
        return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
      const noFlagForceColor = envForceColor();
      if (noFlagForceColor !== void 0) {
        flagForceColor = noFlagForceColor;
      }
      const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
      if (forceColor === 0) {
        return 0;
      }
      if (sniffFlags) {
        if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
          return 3;
        }
        if (hasFlag("color=256")) {
          return 2;
        }
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (import_node_process2.default.platform === "win32") {
        const osRelease = import_node_os.default.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TF_BUILD" in env && "AGENT_NAME" in env) {
        return 1;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function createSupportsColor(stream, options2 = {}) {
      const level = _supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options2
      });
      return translateLevel(level);
    }
    var supportsColor = {
      stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
      stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
    };
    var supports_color_default = supportsColor;
    function stringReplaceAll(string, substring, replacer) {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.slice(endIndex);
      return returnValue;
    }
    function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.slice(endIndex);
      return returnValue;
    }
    var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
    var GENERATOR = Symbol("GENERATOR");
    var STYLER = Symbol("STYLER");
    var IS_EMPTY = Symbol("IS_EMPTY");
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options2 = {}) => {
      if (options2.level && !(Number.isInteger(options2.level) && options2.level >= 0 && options2.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options2.level === void 0 ? colorLevel : options2.level;
    };
    var Chalk = class {
      constructor(options2) {
        return chalkFactory(options2);
      }
    };
    var chalkFactory = (options2) => {
      const chalk3 = (...strings) => strings.join(" ");
      applyOptions(chalk3, options2);
      Object.setPrototypeOf(chalk3, createChalk.prototype);
      return chalk3;
    };
    function createChalk(options2) {
      return chalkFactory(options2);
    }
    Object.setPrototypeOf(createChalk.prototype, Function.prototype);
    for (const [styleName, style] of Object.entries(ansi_styles_default)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this[STYLER], true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var getModelAnsi = (model, level, type, ...arguments_) => {
      if (model === "rgb") {
        if (level === "ansi16m") {
          return ansi_styles_default[type].ansi16m(...arguments_);
        }
        if (level === "ansi256") {
          return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
        }
        return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
      }
      if (model === "hex") {
        return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
      }
      return ansi_styles_default[type][model](...arguments_);
    };
    var usedModels = ["rgb", "hex", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this[GENERATOR].level;
        },
        set(level) {
          this[GENERATOR].level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self2, _styler, _isEmpty) => {
      const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      Object.setPrototypeOf(builder, proto);
      builder[GENERATOR] = self2;
      builder[STYLER] = _styler;
      builder[IS_EMPTY] = _isEmpty;
      return builder;
    };
    var applyStyle = (self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2[IS_EMPTY] ? "" : string;
      }
      let styler = self2[STYLER];
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.includes("\x1B")) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    Object.defineProperties(createChalk.prototype, styles);
    var chalk = createChalk();
    var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
    var import_console = require("console");
    var chalk2 = new Chalk({ level: 2 });
    var ring = [];
    var options = {
      dateFormat: "YYYY-MM-DD HH:mm:ss",
      ringLength: 100,
      console: true,
      timeStamp: true
    };
    var streams = {
      logFile: false,
      accessFile: false,
      clientFile: false,
      logStream: void 0,
      accessStream: void 0,
      clientStream: void 0
    };
    var tags = {
      blank: "",
      continue: ":     ",
      info: chalk2.cyan("INFO: "),
      warn: chalk2.yellow("WARN: "),
      data: chalk2.green("DATA: "),
      error: chalk2.red("ERROR:"),
      fatal: chalk2.bold.red("FATAL:"),
      assert: chalk2.italic.bold.red("ASSERT:"),
      timed: chalk2.magentaBright("TIMED:"),
      state: chalk2.magenta("STATE:"),
      verbose: chalk2.bgGray.yellowBright("VERB: "),
      debug: chalk2.bgGray.redBright("DEBUG:"),
      console: chalk2.gray("CONSOLE:")
    };
    var inspectOptions = {
      showHidden: false,
      depth: 5,
      colors: true,
      showProxy: true,
      maxArrayLength: 1024,
      maxStringLength: 10240,
      breakLength: 200,
      compact: 64,
      sorted: false,
      getters: false
    };
    var logger = new import_console.Console({
      stdout: process.stdout,
      stderr: process.stderr,
      ignoreErrors: true,
      inspectOptions
    });
    function stringify(message) {
      let str = "";
      try {
        str = JSON.stringify(message);
      } catch (e) {
      }
      return str;
    }
    function combineMessages(...messages) {
      let msg = "";
      for (const message of messages) {
        msg += typeof message === "object" ? stringify(message) : message;
        msg += " ";
      }
      return msg;
    }
    function print(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options.dateFormat);
      if (options.console) {
        if (options.timeStamp)
          logger.log(time, ...messages);
        else
          logger.log(...messages);
      }
    }
    function logFile(file) {
      if (typeof file !== "string")
        return;
      options.logFile = file;
      streams.logFile = true;
      streams.logStream = fs3.createWriteStream(path2.resolve(options.logFile || ""), { flags: "a" });
      if (streams.logStream) {
        streams.logStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options.logFile, e);
          streams.logFile = false;
        });
      }
    }
    function accessFile(file) {
      if (typeof file !== "string")
        return;
      options.accessFile = file;
      streams.accessFile = true;
      streams.accessStream = fs3.createWriteStream(path2.resolve(options.accessFile), { flags: "a" });
      if (streams.accessStream) {
        streams.accessStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options.accessFile, e);
          streams.accessFile = false;
        });
      }
    }
    function clientFile(file) {
      if (typeof file !== "string")
        return;
      options.clientFile = file;
      streams.clientFile = true;
      streams.clientStream = fs3.createWriteStream(path2.resolve(options.clientFile), { flags: "a" });
      if (streams.clientStream) {
        streams.clientStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options.clientFile, e);
          streams.clientFile = false;
        });
      }
    }
    async function timed(t0, ...messages) {
      if (arguments.length < 2) {
        messages = [t0];
        t0 = process.hrtime.bigint();
      }
      const t1 = process.hrtime.bigint();
      let elapsed = 0;
      try {
        elapsed = parseInt((t1 - t0).toString());
      } catch (e) {
      }
      elapsed = Math.round(elapsed / 1e6);
      const time = (0, import_dayjs.default)(Date.now()).format(options.dateFormat);
      if (options.console)
        logger.log(time, tags.timed, `${elapsed.toLocaleString()} ms`, ...messages);
      if (streams.logFile && streams.logStream)
        streams.logStream.write(`${tags.timed} ${time} ${elapsed.toLocaleString()} ms ${combineMessages(...messages)}
`);
    }
    async function log4(tag, ...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options.dateFormat);
      if (tags[tag])
        print(tags[tag], ...messages);
      else
        print(...messages);
      if (streams.logFile && streams.logStream)
        streams.logStream.write(`${time} ${tags[tag]} ${combineMessages(...messages)}
`);
      ring.push({ tag, time, msg: combineMessages(...messages) });
      if (ring.length > options.ringLength)
        ring.shift();
    }
    async function assert(res, exp, ...messages) {
      if (res !== exp)
        log4("assert", ...messages, { res, exp });
    }
    async function access(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options.dateFormat);
      if (streams.accessFile && streams.accessStream)
        streams.accessStream.write(`${time} ${combineMessages(...messages)}
`);
    }
    async function client(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options.dateFormat);
      if (streams.clientFile && streams.clientStream)
        streams.clientStream.write(`${time} ${combineMessages(...messages)}
`);
    }
    function configure2(userOptions) {
      if (!userOptions)
        return;
      if (userOptions.dateFormat)
        options.dateFormat = userOptions.dateFormat;
      if (userOptions.ringLength)
        options.ringLength = userOptions.ringLength;
      if (userOptions.logFile)
        logFile(userOptions.logFile);
      if (userOptions.accessFile)
        accessFile(userOptions.accessFile);
      if (userOptions.clientFile)
        clientFile(userOptions.clientFile);
      if (userOptions.inspect)
        inspectOptions = { ...inspectOptions, ...userOptions.inspect };
      logger = new import_console.Console({
        stdout: process.stdout,
        stderr: process.stderr,
        ignoreErrors: true,
        inspectOptions
      });
    }
    function header() {
      const f = "./package.json";
      if (!fs3.existsSync(f))
        return;
      const node = JSON.parse(fs3.readFileSync(f).toString());
      process.title = node.name;
      log4("info", node.name, "version", node.version);
      log4("info", "User:", os2.userInfo().username, "Platform:", process.platform, "Arch:", process.arch, "Node:", process.version);
      if (options.logFile && streams.logFile)
        print(tags.state, "Application log:", path2.resolve(options.logFile));
      if (options.accessFile && streams.accessFile)
        print(tags.state, "Access log:", path2.resolve(options.accessFile));
      if (options.clientFile && streams.clientFile)
        print(tags.state, "Client log:", path2.resolve(options.clientFile));
    }
    function headerJson2() {
      const f = "./package.json";
      if (!fs3.existsSync(f))
        return;
      const node = JSON.parse(fs3.readFileSync(f).toString());
      process.title = node.name;
      log4("info", { application: node.name, version: node.version });
      log4("info", { user: os2.userInfo().username, platform: process.platform, arch: process.arch, node: process.version });
      if (options.logFile || options.accessFile || options.clientFile)
        print(tags.state, { log: path2.resolve(options.logFile || ""), access: path2.resolve(options.accessFile || ""), client: path2.resolve(options.clientFile || "") });
    }
    var blank = (...message) => log4("blank", ...message);
    var info2 = (...message) => log4("info", ...message);
    var state2 = (...message) => log4("state", ...message);
    var data4 = (...message) => log4("data", ...message);
    var warn2 = (...message) => log4("warn", ...message);
    var error = (...message) => log4("error", ...message);
    var fatal = (...message) => log4("fatal", ...message);
    var verbose = (...message) => log4("verbose", ...message);
    var debug = (...message) => log4("debug", ...message);
    var console = (...message) => log4("console", ...message);
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/i18n.js
var require_i18n = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/i18n.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.i18n = void 0;
    var i18n;
    (function(i18n2) {
      i18n2.WRONG_NUMBER_OF_FEN_FIELDS = "A FEN string must contain exactly 6 space-separated fields.";
      i18n2.WRONG_NUMBER_OF_SUBFIELDS_IN_BOARD_FIELD = "The 1st field of a FEN string must contain exactly 8 `/`-separated subfields.";
      i18n2.UNEXPECTED_CHARACTER_IN_BOARD_FIELD = "Unexpected character in the 1st field of the FEN string: `{0}`.";
      i18n2.UNEXPECTED_END_OF_SUBFIELD_IN_BOARD_FIELD = "Subfield {0} of the FEN string 1st field is unexpectedly short.";
      i18n2.INVALID_TURN_FIELD = "The 2nd field of a FEN string must be either `w` or `b`.";
      i18n2.INVALID_CASTLING_FIELD = "The 3rd field of a FEN string must be either `-` or a list of characters among `K`, `Q`, `k` and `q` (in this order).";
      i18n2.INVALID_EN_PASSANT_FIELD = "The 4th field of a FEN string must be either `-` or a square from the 3rd or 6th rank where en-passant is allowed.";
      i18n2.WRONG_RANK_IN_EN_PASSANT_FIELD = "The rank number indicated in the FEN string 4th field is inconsistent with respect to the 2nd field.";
      i18n2.INEFFECTIVE_EN_PASSANT_FIELD = "No en-passant capture can happen on file {0} in the position defined in the FEN string.";
      i18n2.INVALID_HALF_MOVE_COUNT_FIELD = "The 5th field of a FEN string must be a number, indicating the number of half-move since the last pawn move or capture.";
      i18n2.INVALID_MOVE_NUMBER_FIELD = "The 6th field of a FEN string must be a number, indicating the move number of the game.";
      i18n2.INVALID_VARIANT_PREFIX = "Invalid variant prefix: `{0}`.";
      i18n2.INVALID_UCI_NOTATION_SYNTAX = "The syntax of the UCI notation is invalid.";
      i18n2.ILLEGAL_UCI_MOVE = "The UCI move is not legal.";
      i18n2.INVALID_MOVE_NOTATION_SYNTAX = "The syntax of the move notation is invalid.";
      i18n2.ILLEGAL_POSITION = "The position is not legal.";
      i18n2.ILLEGAL_NO_KING_CASTLING = "Castling is not legal in the considered position as it has no king.";
      i18n2.ILLEGAL_QUEEN_SIDE_CASTLING = "Queen-side castling is not legal in the considered position.";
      i18n2.ILLEGAL_KING_SIDE_CASTLING = "King-side castling is not legal in the considered position.";
      i18n2.NO_PIECE_CAN_MOVE_TO = "No {0} can move to {1}.";
      i18n2.NO_PIECE_CAN_MOVE_TO_DISAMBIGUATION = "No {0} on the specified rank/file can move to {1}.";
      i18n2.REQUIRE_DISAMBIGUATION = "Cannot determine uniquely which {0} is supposed to move to {1}.";
      i18n2.WRONG_DISAMBIGUATION_SYMBOL = "Wrong disambiguation symbol (expected: `{0}`, observed: `{1}`).";
      i18n2.CASTLING_MOVE_ENCODED_WITH_ZERO = "Capital O must be used for castling moves (instead of digit 0).";
      i18n2.TRYING_TO_CAPTURE_YOUR_OWN_PIECES = "Capturing its own pieces is not legal.";
      i18n2.CAPTURE_IS_MANDATORY = "Capture is mandatory.";
      i18n2.INVALID_PIECE_SYMBOL = "Character `{0}` is not a valid piece symbol.";
      i18n2.INVALID_PIECE_SYMBOL_COLOR = "Invalid color for piece symbol `{0}`.";
      i18n2.INVALID_CAPTURING_PAWN_MOVE = "Invalid capturing pawn move.";
      i18n2.INVALID_NON_CAPTURING_PAWN_MOVE = "Invalid non-capturing pawn move.";
      i18n2.NOT_SAFE_FOR_WHITE_KING = "This move would let the white king in check.";
      i18n2.NOT_SAFE_FOR_BLACK_KING = "This move would let the black king in check.";
      i18n2.MISSING_PROMOTION = "A promoted piece must be specified for this move.";
      i18n2.MISSING_PROMOTION_SYMBOL = "Character `=` is required to specify a promoted piece.";
      i18n2.INVALID_PROMOTED_PIECE = "{0} cannot be specified as a promoted piece.";
      i18n2.ILLEGAL_PROMOTION = "Specifying a promoted piece is illegal for this move.";
      i18n2.ILLEGAL_NULL_MOVE = "Cannot play a null-move in this position.";
      i18n2.MISSING_CAPTURE_SYMBOL = "Capture symbol `x` is missing.";
      i18n2.INVALID_CAPTURE_SYMBOL = "This move is not a capture move.";
      i18n2.WRONG_CHECK_CHECKMATE_SYMBOL = "Wrong check/checkmate symbol (expected: `{0}`, observed: `{1}`).";
      i18n2.INVALID_PGN_TOKEN = "Unrecognized character or group of characters.";
      i18n2.INVALID_MOVE_IN_PGN_TEXT = "Invalid move ({0}). {1}";
      i18n2.INVALID_FEN_IN_PGN_TEXT = "Invalid FEN string in the initial position header. {0}";
      i18n2.UNEXPECTED_PGN_HEADER = "Unexpected PGN game header.";
      i18n2.MISSING_PGN_HEADER_ID = "Missing or invalid PGN game header ID.";
      i18n2.MISSING_PGN_HEADER_VALUE = "Missing or invalid PGN game header value.";
      i18n2.MISSING_END_OF_PGN_HEADER = "Missing or invalid end of PGN game header.";
      i18n2.UNEXPECTED_BEGIN_OF_VARIATION = "Unexpected begin of variation.";
      i18n2.UNEXPECTED_END_OF_VARIATION = "Unexpected end of variation.";
      i18n2.UNEXPECTED_END_OF_GAME = "Unexpected end of game: there are pending variations.";
      i18n2.UNEXPECTED_END_OF_TEXT = "Unexpected end of text: there is a pending game.";
      i18n2.INVALID_GAME_INDEX = "Game index {0} is invalid (only {1} game(s) found in the PGN data).";
      i18n2.UNKNOWN_VARIANT = "Unknown chess game variant ({0}).";
      i18n2.VARIANT_WITHOUT_FEN = "For game variant {0}, the FEN header is mandatory.";
    })(i18n = exports.i18n || (exports.i18n = {}));
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/exception.js
var require_exception = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/exception.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidPGN = exports.InvalidNotation = exports.InvalidFEN = exports.IllegalArgument = void 0;
    var IllegalArgument = class {
      constructor(functionName) {
        this.functionName = functionName;
      }
      toString() {
        return `Illegal argument in function ${this.functionName}`;
      }
    };
    exports.IllegalArgument = IllegalArgument;
    var InvalidFEN = class {
      constructor(fen, message, ...tokens) {
        this.fen = fen;
        this.message = buildMessage(message, tokens);
      }
      toString() {
        return toStringImpl("InvalidFEN", this.message);
      }
    };
    exports.InvalidFEN = InvalidFEN;
    var InvalidNotation = class {
      constructor(fen, notation, message, ...tokens) {
        this.fen = fen;
        this.notation = notation;
        this.message = buildMessage(message, tokens);
      }
      toString() {
        return toStringImpl("InvalidNotation", this.message);
      }
    };
    exports.InvalidNotation = InvalidNotation;
    var InvalidPGN = class {
      constructor(pgn, index, lineNumber, message, ...tokens) {
        this.pgn = pgn;
        this.index = index;
        this.lineNumber = lineNumber;
        this.message = buildMessage(message, tokens);
      }
      toString() {
        return toStringImpl("InvalidPGN", `[character=${this.index} line=${this.lineNumber}] ${this.message}`);
      }
    };
    exports.InvalidPGN = InvalidPGN;
    function buildMessage(message, tokens) {
      return message.replace(/{(\d+)}/g, (match, placeholder) => {
        const placeholderIndex = Number(placeholder);
        return placeholderIndex < tokens.length ? tokens[placeholderIndex] : match;
      });
    }
    function toStringImpl(exceptionName, message) {
      return exceptionName + " -> " + message;
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/base_types_impl.js
var require_base_types_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/base_types_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.coloredPieceFromString = exports.coloredPieceToString = exports.squareFromString = exports.squareToString = exports.variantFromString = exports.resultFromString = exports.fileFromString = exports.rankFromString = exports.figurineFromString = exports.pieceFromString = exports.colorFromString = exports.variantToString = exports.resultToString = exports.fileToString = exports.rankToString = exports.figurineToString = exports.pieceToString = exports.colorToString = void 0;
    var COLOR_SYMBOL = [..."wb"];
    var PIECE_SYMBOL = [..."kqrbnp"];
    var FIGURINE_SYMBOL = [..."\u2654\u265A\u2655\u265B\u2656\u265C\u2657\u265D\u2658\u265E\u2659\u265F"];
    var RANK_SYMBOL = [..."12345678"];
    var FILE_SYMBOL = [..."abcdefgh"];
    var RESULT_SYMBOL = ["1-0", "0-1", "1/2-1/2", "*"];
    var VARIANT_SYMBOL = ["regular", "chess960", "no-king", "white-king-only", "black-king-only", "antichess", "horde"];
    function colorToString(color) {
      return COLOR_SYMBOL[color];
    }
    exports.colorToString = colorToString;
    function pieceToString(piece) {
      return PIECE_SYMBOL[piece];
    }
    exports.pieceToString = pieceToString;
    function figurineToString(cp) {
      return FIGURINE_SYMBOL[cp];
    }
    exports.figurineToString = figurineToString;
    function rankToString(rank) {
      return RANK_SYMBOL[rank];
    }
    exports.rankToString = rankToString;
    function fileToString(file) {
      return FILE_SYMBOL[file];
    }
    exports.fileToString = fileToString;
    function resultToString(result) {
      return RESULT_SYMBOL[result];
    }
    exports.resultToString = resultToString;
    function variantToString(variant) {
      return VARIANT_SYMBOL[variant];
    }
    exports.variantToString = variantToString;
    function colorFromString(color) {
      return COLOR_SYMBOL.indexOf(color);
    }
    exports.colorFromString = colorFromString;
    function pieceFromString(piece) {
      return PIECE_SYMBOL.indexOf(piece);
    }
    exports.pieceFromString = pieceFromString;
    function figurineFromString(cp) {
      return FIGURINE_SYMBOL.indexOf(cp);
    }
    exports.figurineFromString = figurineFromString;
    function rankFromString(rank) {
      return RANK_SYMBOL.indexOf(rank);
    }
    exports.rankFromString = rankFromString;
    function fileFromString(file) {
      return FILE_SYMBOL.indexOf(file);
    }
    exports.fileFromString = fileFromString;
    function resultFromString(result) {
      return RESULT_SYMBOL.indexOf(result);
    }
    exports.resultFromString = resultFromString;
    function variantFromString(variant) {
      return VARIANT_SYMBOL.indexOf(variant);
    }
    exports.variantFromString = variantFromString;
    function squareToString(square) {
      return FILE_SYMBOL[square % 16] + RANK_SYMBOL[Math.trunc(square / 16)];
    }
    exports.squareToString = squareToString;
    function squareFromString(square) {
      if (typeof square !== "string" || !/^[a-h][1-8]$/.test(square)) {
        return -1;
      }
      const file = FILE_SYMBOL.indexOf(square[0]);
      const rank = RANK_SYMBOL.indexOf(square[1]);
      return rank * 16 + file;
    }
    exports.squareFromString = squareFromString;
    function coloredPieceToString(cp) {
      return COLOR_SYMBOL[cp % 2] + PIECE_SYMBOL[Math.trunc(cp / 2)];
    }
    exports.coloredPieceToString = coloredPieceToString;
    function coloredPieceFromString(cp) {
      if (typeof cp !== "string" || !/^[wb][kqrbnp]$/.test(cp)) {
        return -1;
      }
      const color = COLOR_SYMBOL.indexOf(cp[0]);
      const piece = PIECE_SYMBOL.indexOf(cp[1]);
      return piece * 2 + color;
    }
    exports.coloredPieceFromString = coloredPieceFromString;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/impl.js
var require_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeCopy = exports.make960FromScharnagl = exports.makeInitial = exports.makeEmpty = exports.hasCanonicalStartPosition = void 0;
    var EMPTY_BOARD = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    var REGULAR_START_BOARD = [
      4,
      8,
      6,
      2,
      0,
      6,
      8,
      4,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      5,
      9,
      7,
      3,
      1,
      7,
      9,
      5
    ];
    var HORDE_START_BOARD = [
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      10,
      10,
      -1,
      -1,
      10,
      10,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      5,
      9,
      7,
      3,
      1,
      7,
      9,
      5
    ];
    var START_POSITION_INFO = [
      {
        board: REGULAR_START_BOARD,
        castling: [129, 129],
        king: [4, 116]
      },
      null,
      null,
      null,
      null,
      {
        board: REGULAR_START_BOARD,
        castling: [0, 0],
        king: [-1, -1]
      },
      {
        board: HORDE_START_BOARD,
        castling: [0, 129],
        king: [-1, 116]
      }
    ];
    function hasCanonicalStartPosition(variant) {
      return START_POSITION_INFO[variant] !== null;
    }
    exports.hasCanonicalStartPosition = hasCanonicalStartPosition;
    function makeEmpty(variant) {
      return {
        board: EMPTY_BOARD.slice(),
        turn: 0,
        castling: [0, 0],
        enPassant: -1,
        variant,
        legal: variant === 2,
        king: [-1, -1],
        effectiveCastling: [0, 0],
        effectiveEnPassant: -1
      };
    }
    exports.makeEmpty = makeEmpty;
    function makeInitial(variant) {
      const info2 = START_POSITION_INFO[variant];
      return {
        board: info2.board.slice(),
        turn: 0,
        castling: info2.castling.slice(),
        enPassant: -1,
        variant,
        legal: true,
        king: info2.king.slice(),
        effectiveCastling: info2.castling.slice(),
        effectiveEnPassant: -1
      };
    }
    exports.makeInitial = makeInitial;
    function make960FromScharnagl(scharnaglCode) {
      const info2 = decodeScharnagl(scharnaglCode);
      const rank1 = info2.pieceScheme.map((piece) => piece * 2 + 0);
      const rank8 = info2.pieceScheme.map((piece) => piece * 2 + 1);
      return {
        board: [
          rank1[0],
          rank1[1],
          rank1[2],
          rank1[3],
          rank1[4],
          rank1[5],
          rank1[6],
          rank1[7],
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          11,
          11,
          11,
          11,
          11,
          11,
          11,
          11,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          -2,
          rank8[0],
          rank8[1],
          rank8[2],
          rank8[3],
          rank8[4],
          rank8[5],
          rank8[6],
          rank8[7]
        ],
        turn: 0,
        castling: [info2.castling, info2.castling],
        enPassant: -1,
        variant: 1,
        legal: true,
        king: [0 + info2.kingFile, 112 + info2.kingFile],
        effectiveCastling: [info2.castling, info2.castling],
        effectiveEnPassant: -1
      };
    }
    exports.make960FromScharnagl = make960FromScharnagl;
    function decodeScharnagl(scharnaglCode) {
      const scheme = [-1, -1, -1, -1, -1, -1, -1, -1];
      let castling = 0;
      let kingFile = -1;
      function forEachEmpty(fun) {
        let emptyIndex = 0;
        for (let file = 0; file < 8; ++file) {
          if (scheme[file] >= 0) {
            continue;
          }
          fun(file, emptyIndex);
          ++emptyIndex;
        }
      }
      function setAt(piece, emptyIndexTarget1, emptyIndexTarget2) {
        forEachEmpty((file, emptyIndex) => {
          if (emptyIndex === emptyIndexTarget1 || emptyIndex === emptyIndexTarget2) {
            scheme[file] = piece;
          }
        });
      }
      scheme[scharnaglCode % 4 * 2 + 1] = 3;
      scharnaglCode = Math.trunc(scharnaglCode / 4);
      scheme[scharnaglCode % 4 * 2] = 3;
      scharnaglCode = Math.trunc(scharnaglCode / 4);
      setAt(1, scharnaglCode % 6, -1);
      scharnaglCode = Math.trunc(scharnaglCode / 6);
      switch (scharnaglCode) {
        case 0:
          setAt(4, 0, 1);
          break;
        case 1:
          setAt(4, 0, 2);
          break;
        case 2:
          setAt(4, 0, 3);
          break;
        case 3:
          setAt(4, 0, 4);
          break;
        case 4:
          setAt(4, 1, 2);
          break;
        case 5:
          setAt(4, 1, 3);
          break;
        case 6:
          setAt(4, 1, 4);
          break;
        case 7:
          setAt(4, 2, 3);
          break;
        case 8:
          setAt(4, 2, 4);
          break;
        case 9:
          setAt(4, 3, 4);
          break;
      }
      forEachEmpty((file, emptyIndex) => {
        if (emptyIndex === 1) {
          scheme[file] = 0;
          kingFile = file;
        } else {
          scheme[file] = 2;
          castling |= 1 << file;
        }
      });
      return {
        pieceScheme: scheme,
        castling,
        kingFile
      };
    }
    function makeCopy(position) {
      return {
        board: position.board.slice(),
        turn: position.turn,
        castling: position.castling.slice(),
        enPassant: position.enPassant,
        variant: position.variant,
        legal: position.legal,
        king: position.king.slice(),
        effectiveCastling: position.effectiveCastling === null ? null : position.effectiveCastling.slice(),
        effectiveEnPassant: position.effectiveEnPassant
      };
    }
    exports.makeCopy = makeCopy;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/helper.js
var require_helper = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/helper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nagSymbol = exports.variantWithCanonicalStartPosition = exports.oppositeColor = exports.coordinatesToSquare = exports.squareToCoordinates = exports.squareColor = exports.forEachSquare = void 0;
    var exception_1 = require_exception();
    var base_types_impl_1 = require_base_types_impl();
    var impl_1 = require_impl();
    function forEachSquare(callback) {
      for (let rank = 0; rank < 8; ++rank) {
        for (let file = 0; file < 8; ++file) {
          callback((0, base_types_impl_1.squareToString)(rank * 16 + file));
        }
      }
    }
    exports.forEachSquare = forEachSquare;
    function squareColor(square) {
      const squareCode = (0, base_types_impl_1.squareFromString)(square);
      if (squareCode < 0) {
        throw new exception_1.IllegalArgument("squareColor()");
      }
      return Math.trunc(squareCode / 16) % 2 === squareCode % 2 ? "b" : "w";
    }
    exports.squareColor = squareColor;
    function squareToCoordinates(square) {
      const squareCode = (0, base_types_impl_1.squareFromString)(square);
      if (squareCode < 0) {
        throw new exception_1.IllegalArgument("squareToCoordinates()");
      }
      return { rank: Math.trunc(squareCode / 16), file: squareCode % 16 };
    }
    exports.squareToCoordinates = squareToCoordinates;
    function coordinatesToSquare(fileOrCoordinates, rankOrUndefined) {
      const file = typeof fileOrCoordinates === "number" ? fileOrCoordinates : fileOrCoordinates.file;
      const rank = typeof fileOrCoordinates === "number" ? rankOrUndefined : fileOrCoordinates.rank;
      if (!Number.isInteger(file) || !Number.isInteger(rank) || file < 0 || file >= 8 || rank < 0 || rank >= 8) {
        throw new exception_1.IllegalArgument("coordinatesToSquare()");
      }
      return (0, base_types_impl_1.fileToString)(file) + (0, base_types_impl_1.rankToString)(rank);
    }
    exports.coordinatesToSquare = coordinatesToSquare;
    function oppositeColor(color) {
      const colorCode = (0, base_types_impl_1.colorFromString)(color);
      if (colorCode < 0) {
        throw new exception_1.IllegalArgument("oppositeColor()");
      }
      return (0, base_types_impl_1.colorToString)(1 - colorCode);
    }
    exports.oppositeColor = oppositeColor;
    function variantWithCanonicalStartPosition(variant) {
      const variantCode = (0, base_types_impl_1.variantFromString)(variant);
      if (variantCode < 0) {
        throw new exception_1.IllegalArgument("variantWithCanonicalStartPosition()");
      }
      return (0, impl_1.hasCanonicalStartPosition)(variantCode);
    }
    exports.variantWithCanonicalStartPosition = variantWithCanonicalStartPosition;
    var NAG_SYMBOLS = /* @__PURE__ */ new Map();
    NAG_SYMBOLS.set(1, "!");
    NAG_SYMBOLS.set(2, "?");
    NAG_SYMBOLS.set(3, "!!");
    NAG_SYMBOLS.set(4, "??");
    NAG_SYMBOLS.set(5, "!?");
    NAG_SYMBOLS.set(6, "?!");
    NAG_SYMBOLS.set(7, "\u25A1");
    NAG_SYMBOLS.set(8, "\u25A1");
    NAG_SYMBOLS.set(10, "=");
    NAG_SYMBOLS.set(11, "=");
    NAG_SYMBOLS.set(13, "\u221E");
    NAG_SYMBOLS.set(14, "\u2A72");
    NAG_SYMBOLS.set(15, "\u2A71");
    NAG_SYMBOLS.set(16, "\xB1");
    NAG_SYMBOLS.set(17, "\u2213");
    NAG_SYMBOLS.set(18, "+\u2212");
    NAG_SYMBOLS.set(19, "\u2212+");
    NAG_SYMBOLS.set(22, "\u2A00");
    NAG_SYMBOLS.set(32, "\u27F3");
    NAG_SYMBOLS.set(36, "\u2191");
    NAG_SYMBOLS.set(40, "\u2192");
    NAG_SYMBOLS.set(132, "\u21C6");
    NAG_SYMBOLS.set(138, "\u2A01");
    NAG_SYMBOLS.set(140, "\u2206");
    NAG_SYMBOLS.set(141, "\u2207");
    NAG_SYMBOLS.set(142, "\u2313");
    NAG_SYMBOLS.set(143, "\u2264");
    NAG_SYMBOLS.set(145, "RR");
    NAG_SYMBOLS.set(146, "N");
    function nagSymbol(nag) {
      if (!Number.isInteger(nag) || nag < 0) {
        throw new exception_1.IllegalArgument("nagSymbol()");
      }
      const result = NAG_SYMBOLS.get(nag);
      return result === void 0 ? "$" + nag : result;
    }
    exports.nagSymbol = nagSymbol;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/date_value.js
var require_date_value = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/date_value.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state2, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state2, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
    };
    var _DateValue_type;
    var _DateValue_year;
    var _DateValue_month;
    var _DateValue_day;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DateValue = void 0;
    var exception_1 = require_exception();
    var DateValue = class {
      constructor(dateOrYear, month, day) {
        _DateValue_type.set(this, void 0);
        _DateValue_year.set(this, void 0);
        _DateValue_month.set(this, void 0);
        _DateValue_day.set(this, void 0);
        if (dateOrYear instanceof Date) {
          __classPrivateFieldSet(this, _DateValue_type, "ymd", "f");
          __classPrivateFieldSet(this, _DateValue_year, dateOrYear.getFullYear(), "f");
          __classPrivateFieldSet(this, _DateValue_month, dateOrYear.getMonth() + 1, "f");
          __classPrivateFieldSet(this, _DateValue_day, dateOrYear.getDate(), "f");
        } else {
          const type = computeType(dateOrYear, month, day);
          if (!type) {
            throw new exception_1.IllegalArgument("DateValue()");
          }
          __classPrivateFieldSet(this, _DateValue_type, type, "f");
          __classPrivateFieldSet(this, _DateValue_year, dateOrYear, "f");
          __classPrivateFieldSet(this, _DateValue_month, month === null ? void 0 : month, "f");
          __classPrivateFieldSet(this, _DateValue_day, day === null ? void 0 : day, "f");
        }
      }
      type() {
        return __classPrivateFieldGet(this, _DateValue_type, "f");
      }
      year() {
        return __classPrivateFieldGet(this, _DateValue_year, "f");
      }
      month() {
        if (__classPrivateFieldGet(this, _DateValue_month, "f") === void 0) {
          throw new exception_1.IllegalArgument("DateValue.month()");
        }
        return __classPrivateFieldGet(this, _DateValue_month, "f");
      }
      day() {
        if (__classPrivateFieldGet(this, _DateValue_day, "f") === void 0) {
          throw new exception_1.IllegalArgument("DateValue.day()");
        }
        return __classPrivateFieldGet(this, _DateValue_day, "f");
      }
      toDate() {
        const month = __classPrivateFieldGet(this, _DateValue_month, "f") === void 0 ? 0 : __classPrivateFieldGet(this, _DateValue_month, "f") - 1;
        const day = __classPrivateFieldGet(this, _DateValue_day, "f") === void 0 ? 1 : __classPrivateFieldGet(this, _DateValue_day, "f");
        return new Date(__classPrivateFieldGet(this, _DateValue_year, "f"), month, day);
      }
      toString() {
        return toStringImpl(__classPrivateFieldGet(this, _DateValue_year, "f"), __classPrivateFieldGet(this, _DateValue_month, "f"), __classPrivateFieldGet(this, _DateValue_day, "f"), "-", "**");
      }
      toPGNString() {
        return toStringImpl(__classPrivateFieldGet(this, _DateValue_year, "f"), __classPrivateFieldGet(this, _DateValue_month, "f"), __classPrivateFieldGet(this, _DateValue_day, "f"), ".", "??");
      }
      toHumanReadableString(locales) {
        switch (__classPrivateFieldGet(this, _DateValue_type, "f")) {
          case "ymd": {
            const date = new Date(__classPrivateFieldGet(this, _DateValue_year, "f"), __classPrivateFieldGet(this, _DateValue_month, "f") - 1, __classPrivateFieldGet(this, _DateValue_day, "f"));
            return new Intl.DateTimeFormat(locales, { dateStyle: "long" }).format(date);
          }
          case "ym": {
            const date = new Date(__classPrivateFieldGet(this, _DateValue_year, "f"), __classPrivateFieldGet(this, _DateValue_month, "f") - 1, 1);
            return new Intl.DateTimeFormat(locales, { month: "long", year: "numeric" }).format(date);
          }
          default:
            return String(__classPrivateFieldGet(this, _DateValue_year, "f"));
        }
      }
      static isValid(year, month, day) {
        return Boolean(computeType(year, month, day));
      }
    };
    exports.DateValue = DateValue;
    _DateValue_type = /* @__PURE__ */ new WeakMap(), _DateValue_year = /* @__PURE__ */ new WeakMap(), _DateValue_month = /* @__PURE__ */ new WeakMap(), _DateValue_day = /* @__PURE__ */ new WeakMap();
    function toStringImpl(year, month, day, separator, undefinedToken) {
      const y = String(year).padStart(4, "0");
      const m = month === void 0 ? undefinedToken : String(month).padStart(2, "0");
      const d = day === void 0 ? undefinedToken : String(day).padStart(2, "0");
      return y + separator + m + separator + d;
    }
    function computeType(year, month, day) {
      if (day !== void 0 && day !== null) {
        return isValidYear(year) && isValidMonth(month) && Number.isInteger(day) && day >= 1 && day <= daysInMonth(year, month) ? "ymd" : false;
      } else if (month !== void 0 && month !== null) {
        return isValidYear(year) && isValidMonth(month) ? "ym" : false;
      } else {
        return isValidYear(year) ? "y" : false;
      }
    }
    function isValidYear(year) {
      return Number.isInteger(year) && year >= 0;
    }
    function isValidMonth(month) {
      return Number.isInteger(month) && month >= 1 && month <= 12;
    }
    function daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/move_descriptor.js
var require_move_descriptor = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/move_descriptor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMoveDescriptor = exports.MoveDescriptor = void 0;
    var MoveDescriptor = class {
      constructor() {
      }
      toString() {
        let result = this.from() + this.to();
        if (this.isPromotion()) {
          result += this.promotion().toUpperCase();
        } else if (this.isCastling()) {
          result += "O";
        }
        return result;
      }
    };
    exports.MoveDescriptor = MoveDescriptor;
    function isMoveDescriptor(obj) {
      return obj instanceof MoveDescriptor;
    }
    exports.isMoveDescriptor = isMoveDescriptor;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/attacks.js
var require_attacks = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/attacks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAttacks = exports.isAttacked = exports.ATTACK_DIRECTIONS = void 0;
    exports.ATTACK_DIRECTIONS = [
      [-17, -16, -15, -1, 1, 15, 16, 17],
      [-17, -16, -15, -1, 1, 15, 16, 17],
      [-17, -16, -15, -1, 1, 15, 16, 17],
      [-17, -16, -15, -1, 1, 15, 16, 17],
      [-16, -1, 1, 16],
      [-16, -1, 1, 16],
      [-17, -15, 15, 17],
      [-17, -15, 15, 17],
      [-33, -31, -18, -14, 14, 18, 31, 33],
      [-33, -31, -18, -14, 14, 18, 31, 33],
      [15, 17],
      [-17, -15]
    ];
    function isAttacked(position, square, attackerColor) {
      return isAttackedByNonSliding(position, square, 0 * 2 + attackerColor) || isAttackedByNonSliding(position, square, 4 * 2 + attackerColor) || isAttackedByNonSliding(position, square, 5 * 2 + attackerColor) || isAttackedBySliding(position, square, 2 * 2 + attackerColor, 1 * 2 + attackerColor) || isAttackedBySliding(position, square, 3 * 2 + attackerColor, 1 * 2 + attackerColor);
    }
    exports.isAttacked = isAttacked;
    function isAttackedByNonSliding(position, square, nonSlidingAttacker) {
      const directions = exports.ATTACK_DIRECTIONS[nonSlidingAttacker];
      for (let i = 0; i < directions.length; ++i) {
        const sq = square - directions[i];
        if ((sq & 136) === 0 && position.board[sq] === nonSlidingAttacker) {
          return true;
        }
      }
      return false;
    }
    function isAttackedBySliding(position, square, slidingAttacker, queenAttacker) {
      const directions = exports.ATTACK_DIRECTIONS[slidingAttacker];
      for (let i = 0; i < directions.length; ++i) {
        let sq = square;
        while (true) {
          sq -= directions[i];
          if ((sq & 136) === 0) {
            const cp = position.board[sq];
            if (cp === -1) {
              continue;
            } else if (cp === slidingAttacker || cp === queenAttacker) {
              return true;
            }
          }
          break;
        }
      }
      return false;
    }
    function getAttacks(position, square, attackerColor) {
      const result = [];
      findNonSlidingAttacks(position, square, result, 0 * 2 + attackerColor);
      findNonSlidingAttacks(position, square, result, 4 * 2 + attackerColor);
      findNonSlidingAttacks(position, square, result, 5 * 2 + attackerColor);
      findSlidingAttacks(position, square, result, 2 * 2 + attackerColor, 1 * 2 + attackerColor);
      findSlidingAttacks(position, square, result, 3 * 2 + attackerColor, 1 * 2 + attackerColor);
      return result;
    }
    exports.getAttacks = getAttacks;
    function findNonSlidingAttacks(position, square, result, nonSlidingAttacker) {
      const directions = exports.ATTACK_DIRECTIONS[nonSlidingAttacker];
      for (let i = 0; i < directions.length; ++i) {
        const sq = square - directions[i];
        if ((sq & 136) === 0 && position.board[sq] === nonSlidingAttacker) {
          result.push(sq);
        }
      }
    }
    function findSlidingAttacks(position, square, result, slidingAttacker, queenAttacker) {
      const directions = exports.ATTACK_DIRECTIONS[slidingAttacker];
      for (let i = 0; i < directions.length; ++i) {
        let sq = square;
        while (true) {
          sq -= directions[i];
          if ((sq & 136) === 0) {
            const cp = position.board[sq];
            if (cp === -1) {
              continue;
            } else if (cp === slidingAttacker || cp === queenAttacker) {
              result.push(sq);
            }
          }
          break;
        }
      }
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/legality.js
var require_legality = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/legality.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEqual = exports.refreshEffectiveEnPassant = exports.refreshEffectiveCastling = exports.isKingSafeAfterMove = exports.refreshLegalFlagAndKingSquares = exports.isLegal = void 0;
    var attacks_1 = require_attacks();
    function isLegal(position) {
      refreshLegalFlagAndKingSquares(position);
      return position.legal;
    }
    exports.isLegal = isLegal;
    function refreshLegalFlagAndKingSquares(position) {
      if (position.legal !== null) {
        return;
      }
      position.legal = false;
      const whiteKingOK = refreshKingSquare(position, 0);
      const blackKingOK = refreshKingSquare(position, 1);
      if (!whiteKingOK || !blackKingOK) {
        return;
      }
      if (position.variant === 5) {
        if (!hasAtLeastOnePiece(position, 1 - position.turn)) {
          return;
        }
      } else if (position.variant === 6) {
        if (position.turn === 1 && !hasAtLeastOnePiece(position, 0)) {
          return;
        }
      }
      if (position.king[1 - position.turn] >= 0 && (0, attacks_1.isAttacked)(position, position.king[1 - position.turn], position.turn)) {
        return;
      }
      const forbiddenCPWhite1 = position.variant === 6 ? -2 : 10;
      for (let c = 0; c < 8; ++c) {
        const cp1 = position.board[0 + c];
        const cp8 = position.board[112 + c];
        if (cp1 === forbiddenCPWhite1 || cp8 === 10 || cp1 === 11 || cp8 === 11) {
          return;
        }
      }
      position.legal = true;
    }
    exports.refreshLegalFlagAndKingSquares = refreshLegalFlagAndKingSquares;
    function refreshKingSquare(position, color) {
      const target = 0 * 2 + color;
      position.king[color] = -1;
      if (position.variant === 5) {
        return true;
      } else if (position.variant === 2 || position.variant === 4 - color || position.variant === 6 && color === 0) {
        for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
          if (position.board[sq] === target) {
            return false;
          }
        }
        return true;
      } else {
        for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
          if (position.board[sq] === target) {
            if (position.king[color] < 0) {
              position.king[color] = sq;
            } else {
              position.king[color] = -1;
              return false;
            }
          }
        }
        return position.king[color] >= 0;
      }
    }
    function hasAtLeastOnePiece(position, color) {
      for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
        if (position.board[sq] !== -1 && position.board[sq] % 2 === color) {
          return true;
        }
      }
      return false;
    }
    function isKingSafeAfterMove(position, from, to, enPassantSquare = -1) {
      if (position.king[position.turn] < 0) {
        return true;
      }
      const fromContent = position.board[from];
      const toContent = position.board[to];
      const movingPiece = Math.trunc(fromContent / 2);
      position.board[to] = fromContent;
      position.board[from] = -1;
      if (enPassantSquare >= 0) {
        position.board[enPassantSquare] = -1;
      }
      try {
        return !(0, attacks_1.isAttacked)(position, movingPiece === 0 ? to : position.king[position.turn], 1 - position.turn);
      } finally {
        position.board[from] = fromContent;
        position.board[to] = toContent;
        if (enPassantSquare >= 0) {
          position.board[enPassantSquare] = 5 * 2 + 1 - position.turn;
        }
      }
    }
    exports.isKingSafeAfterMove = isKingSafeAfterMove;
    function refreshEffectiveCastling(position) {
      if (position.effectiveCastling !== null) {
        return;
      }
      refreshLegalFlagAndKingSquares(position);
      position.effectiveCastling = position.variant === 1 ? [computeEffectiveCastlingForChess960(position, 0), computeEffectiveCastlingForChess960(position, 1)] : [computeEffectiveCastlingForRegularChess(position, 0), computeEffectiveCastlingForRegularChess(position, 1)];
    }
    exports.refreshEffectiveCastling = refreshEffectiveCastling;
    function computeEffectiveCastlingForRegularChess(position, color) {
      const rankOffset = 112 * color;
      if (position.king[color] !== rankOffset + 4 || position.castling[color] === 0) {
        return 0;
      }
      const targetRook = 2 * 2 + color;
      let result = 0;
      if ((position.castling[color] & 1) !== 0 && position.board[rankOffset] === targetRook) {
        result |= 1;
      }
      if ((position.castling[color] & 128) !== 0 && position.board[rankOffset + 7] === targetRook) {
        result |= 128;
      }
      return result;
    }
    function computeEffectiveCastlingForChess960(position, color) {
      const rankOffset = 112 * color;
      if (position.king[color] <= rankOffset || position.king[color] >= rankOffset + 7 || position.castling[color] === 0) {
        return 0;
      }
      const targetRook = 2 * 2 + color;
      let result = 0;
      let queenSideRookFile = -1;
      for (let file = position.king[color] % 16 - 1; file >= 0; --file) {
        if ((position.castling[color] & 1 << file) === 0 || position.board[rankOffset + file] !== targetRook) {
          continue;
        }
        if (queenSideRookFile < 0) {
          queenSideRookFile = file;
        } else {
          queenSideRookFile = -1;
          break;
        }
      }
      if (queenSideRookFile >= 0) {
        result |= 1 << queenSideRookFile;
      }
      let kingSideRookFile = -1;
      for (let file = position.king[color] % 16 + 1; file < 8; ++file) {
        if ((position.castling[color] & 1 << file) === 0 || position.board[rankOffset + file] !== targetRook) {
          continue;
        }
        if (kingSideRookFile < 0) {
          kingSideRookFile = file;
        } else {
          kingSideRookFile = -1;
          break;
        }
      }
      if (kingSideRookFile >= 0) {
        result |= 1 << kingSideRookFile;
      }
      return result;
    }
    function refreshEffectiveEnPassant(position) {
      if (position.effectiveEnPassant !== null) {
        return;
      }
      position.effectiveEnPassant = -1;
      if (position.enPassant < 0) {
        return;
      }
      const square2 = (6 - position.turn * 5) * 16 + position.enPassant;
      const square3 = (5 - position.turn * 3) * 16 + position.enPassant;
      const square4 = (4 - position.turn) * 16 + position.enPassant;
      const capturingPawn = 5 * 2 + position.turn;
      const capturedPawn = 5 * 2 + 1 - position.turn;
      if (position.board[square2] !== -1 || position.board[square3] !== -1 || position.board[square4] !== capturedPawn) {
        return;
      }
      const hasCapturingPawnBefore = (square4 - 1 & 136) === 0 && position.board[square4 - 1] === capturingPawn;
      const hasCapturingPawnAfter = (square4 + 1 & 136) === 0 && position.board[square4 + 1] === capturingPawn;
      if (!hasCapturingPawnBefore && !hasCapturingPawnAfter) {
        return;
      }
      refreshLegalFlagAndKingSquares(position);
      if (!(hasCapturingPawnBefore && isKingSafeAfterMove(position, square4 - 1, square3, square4)) && !(hasCapturingPawnAfter && isKingSafeAfterMove(position, square4 + 1, square3, square4))) {
        return;
      }
      position.effectiveEnPassant = position.enPassant;
    }
    exports.refreshEffectiveEnPassant = refreshEffectiveEnPassant;
    function isEqual(pos1, pos2) {
      if (pos1.turn !== pos2.turn || pos1.variant !== pos2.variant) {
        return false;
      }
      for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
        if (pos1.board[sq] !== pos2.board[sq]) {
          return false;
        }
      }
      refreshEffectiveCastling(pos1);
      refreshEffectiveCastling(pos2);
      if (pos1.effectiveCastling[0] !== pos2.effectiveCastling[0] || pos1.effectiveCastling[1] !== pos2.effectiveCastling[1]) {
        return false;
      }
      refreshEffectiveEnPassant(pos1);
      refreshEffectiveEnPassant(pos2);
      return pos1.effectiveEnPassant === pos2.effectiveEnPassant;
    }
    exports.isEqual = isEqual;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/fen.js
var require_fen = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/fen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFEN = exports.getFEN = exports.ascii = void 0;
    var base_types_impl_1 = require_base_types_impl();
    var impl_1 = require_impl();
    var legality_1 = require_legality();
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    var FEN_PIECE_SYMBOL = [..."KkQqRrBbNnPp"];
    var EN_PASSANT_RANK = ["6", "3"];
    function ascii(position) {
      let result = "+---+---+---+---+---+---+---+---+\n";
      for (let r = 7; r >= 0; --r) {
        for (let c = 0; c < 8; ++c) {
          const cp = position.board[r * 16 + c];
          result += "| " + (cp === -1 ? " " : FEN_PIECE_SYMBOL[cp]) + " ";
        }
        result += "|\n";
        result += "+---+---+---+---+---+---+---+---+\n";
      }
      result += (0, base_types_impl_1.colorToString)(position.turn) + " " + castlingToString(position) + " " + enPassantToString(position);
      if (position.variant !== 0) {
        result += " (" + (0, base_types_impl_1.variantToString)(position.variant) + ")";
      }
      return result;
    }
    exports.ascii = ascii;
    function getFEN(position, fiftyMoveClock = 0, fullMoveNumber = 1, regularFENIfPossible = false) {
      let result = "";
      for (let r = 7; r >= 0; --r) {
        let emptyCount = 0;
        for (let c = 0; c < 8; ++c) {
          const cp = position.board[r * 16 + c];
          if (cp === -1) {
            ++emptyCount;
          } else {
            if (emptyCount > 0) {
              result += emptyCount;
              emptyCount = 0;
            }
            result += FEN_PIECE_SYMBOL[cp];
          }
        }
        if (emptyCount > 0) {
          result += emptyCount;
        }
        if (r > 0) {
          result += "/";
        }
      }
      result += " " + (0, base_types_impl_1.colorToString)(position.turn) + " " + castlingToString(position, regularFENIfPossible) + " " + enPassantToString(position);
      result += " " + fiftyMoveClock + " " + fullMoveNumber;
      return result;
    }
    exports.getFEN = getFEN;
    function castlingToString(position, regularFENIfPossible = false) {
      (0, legality_1.refreshEffectiveCastling)(position);
      if (position.variant === 1) {
        if (regularFENIfPossible) {
          const whiteRegularFlags = regularFENCaslingFlagIfPossible(position, 0);
          const blackRegularFlags = regularFENCaslingFlagIfPossible(position, 1);
          if (whiteRegularFlags !== false && blackRegularFlags !== false) {
            return whiteRegularFlags === "" && blackRegularFlags === "" ? "-" : whiteRegularFlags.toUpperCase() + blackRegularFlags;
          }
        }
        let whiteFlags = "";
        let blackFlags = "";
        for (let file = 0; file < 8; ++file) {
          if (position.effectiveCastling[0] & 1 << file) {
            whiteFlags += (0, base_types_impl_1.fileToString)(file);
          }
          if (position.effectiveCastling[1] & 1 << file) {
            blackFlags += (0, base_types_impl_1.fileToString)(file);
          }
        }
        return whiteFlags === "" && blackFlags === "" ? "-" : whiteFlags.toUpperCase() + blackFlags;
      } else {
        let result = "";
        if (position.effectiveCastling[0] & 128) {
          result += "K";
        }
        if (position.effectiveCastling[0] & 1) {
          result += "Q";
        }
        if (position.effectiveCastling[1] & 128) {
          result += "k";
        }
        if (position.effectiveCastling[1] & 1) {
          result += "q";
        }
        return result === "" ? "-" : result;
      }
    }
    function regularFENCaslingFlagIfPossible(position, color) {
      const kingFileMask = 1 << position.king[color] % 16;
      const kingSideMask = position.effectiveCastling[color] & ~(kingFileMask | kingFileMask - 1);
      const queenSideMask = position.effectiveCastling[color] & kingFileMask - 1;
      let fenFlag = "";
      const firstSquare = 112 * color;
      const lastSquare = 112 * color + 7;
      const targetRook = 2 * 2 + color;
      if (kingSideMask !== 0) {
        let rookFound = false;
        for (let sq = position.king[color] + 1; sq <= lastSquare; ++sq) {
          if (position.board[sq] === targetRook) {
            if (rookFound) {
              return false;
            } else {
              rookFound = true;
            }
          }
        }
        fenFlag += "k";
      }
      if (queenSideMask !== 0) {
        let rookFound = false;
        for (let sq = position.king[color] - 1; sq >= firstSquare; --sq) {
          if (position.board[sq] === targetRook) {
            if (rookFound) {
              return false;
            } else {
              rookFound = true;
            }
          }
        }
        fenFlag += "q";
      }
      return fenFlag;
    }
    function enPassantToString(position) {
      (0, legality_1.refreshEffectiveEnPassant)(position);
      return position.effectiveEnPassant < 0 ? "-" : (0, base_types_impl_1.fileToString)(position.effectiveEnPassant) + EN_PASSANT_RANK[position.turn];
    }
    function parseFEN(variant, fen, strict) {
      const fields = strict ? fen.split(" ") : fen.replace(/^\s+|\s+$/g, "").split(/\s+/);
      if (fields.length !== 6) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.WRONG_NUMBER_OF_FEN_FIELDS);
      }
      const rankFields = fields[0].split("/");
      if (rankFields.length !== 8) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.WRONG_NUMBER_OF_SUBFIELDS_IN_BOARD_FIELD);
      }
      const position = (0, impl_1.makeEmpty)(variant);
      position.legal = null;
      position.effectiveCastling = null;
      position.effectiveEnPassant = null;
      for (let r = 7; r >= 0; --r) {
        const rankField = rankFields[7 - r];
        let i = 0;
        let c = 0;
        while (i < rankField.length && c < 8) {
          const s = rankField[i];
          const cp = FEN_PIECE_SYMBOL.indexOf(s);
          if (/^[1-8]$/.test(s)) {
            c += parseInt(s, 10);
          } else if (cp >= 0) {
            position.board[r * 16 + c] = cp;
            ++c;
          } else {
            throw new exception_1.InvalidFEN(fen, i18n_1.i18n.UNEXPECTED_CHARACTER_IN_BOARD_FIELD, s);
          }
          ++i;
        }
        if (i !== rankField.length || c !== 8) {
          throw new exception_1.InvalidFEN(fen, i18n_1.i18n.UNEXPECTED_END_OF_SUBFIELD_IN_BOARD_FIELD, 8 - r);
        }
      }
      position.turn = (0, base_types_impl_1.colorFromString)(fields[1]);
      if (position.turn < 0) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INVALID_TURN_FIELD);
      }
      const castling = variant === 1 ? castlingFromStringXFEN(fields[2], strict, position.board) : castlingFromStringFEN(fields[2], strict);
      if (castling === null) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INVALID_CASTLING_FIELD);
      } else {
        position.castling = castling;
      }
      const enPassantField = fields[3];
      if (enPassantField !== "-") {
        if (!/^[a-h][36]$/.test(enPassantField)) {
          throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INVALID_EN_PASSANT_FIELD);
        }
        position.enPassant = (0, base_types_impl_1.fileFromString)(enPassantField[0]);
        if (strict) {
          if (enPassantField[1] !== EN_PASSANT_RANK[position.turn]) {
            throw new exception_1.InvalidFEN(fen, i18n_1.i18n.WRONG_RANK_IN_EN_PASSANT_FIELD);
          }
          (0, legality_1.refreshEffectiveEnPassant)(position);
          if (position.enPassant !== position.effectiveEnPassant) {
            throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INEFFECTIVE_EN_PASSANT_FIELD, (0, base_types_impl_1.fileToString)(position.enPassant));
          }
        }
      }
      const moveCountingRegex = strict ? /^(?:0|[1-9][0-9]*)$/ : /^[0-9]+$/;
      if (!moveCountingRegex.test(fields[4])) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INVALID_HALF_MOVE_COUNT_FIELD);
      }
      if (!moveCountingRegex.test(fields[5])) {
        throw new exception_1.InvalidFEN(fen, i18n_1.i18n.INVALID_MOVE_NUMBER_FIELD);
      }
      return { position, fiftyMoveClock: parseInt(fields[4], 10), fullMoveNumber: parseInt(fields[5], 10) };
    }
    exports.parseFEN = parseFEN;
    function castlingFromStringFEN(castling, strict) {
      const result = [0, 0];
      if (castling === "-") {
        return result;
      }
      if (!(strict ? /^K?Q?k?q?$/ : /^[KQkq]*$/).test(castling)) {
        return null;
      }
      if (castling.indexOf("K") >= 0) {
        result[0] |= 1 << 7;
      }
      if (castling.indexOf("Q") >= 0) {
        result[0] |= 1 << 0;
      }
      if (castling.indexOf("k") >= 0) {
        result[1] |= 1 << 7;
      }
      if (castling.indexOf("q") >= 0) {
        result[1] |= 1 << 0;
      }
      return result;
    }
    function castlingFromStringXFEN(castling, strict, board) {
      const result = [0, 0];
      if (castling === "-") {
        return result;
      }
      if (!(strict ? /^[A-H]{0,2}[a-h]{0,2}$/ : /^[A-Ha-h]*|[KQkq]*$/).test(castling)) {
        return null;
      }
      function searchQueenSideRook(color) {
        const targetRook = 2 * 2 + color;
        const targetKing = 0 * 2 + color;
        for (let sq = 112 * color; sq < 112 * color + 8; ++sq) {
          if (board[sq] === targetRook) {
            return sq % 8;
          } else if (board[sq] === targetKing) {
            break;
          }
        }
        return 0;
      }
      function searchKingSideRook(color) {
        const targetRook = 2 * 2 + color;
        const targetKing = 0 * 2 + color;
        for (let sq = 112 * color + 7; sq >= 112 * color; --sq) {
          if (board[sq] === targetRook) {
            return sq % 8;
          } else if (board[sq] === targetKing) {
            break;
          }
        }
        return 7;
      }
      if (!strict) {
        if (castling.indexOf("K") >= 0) {
          result[0] |= 1 << searchKingSideRook(0);
        }
        if (castling.indexOf("Q") >= 0) {
          result[0] |= 1 << searchQueenSideRook(0);
        }
        if (castling.indexOf("k") >= 0) {
          result[1] |= 1 << searchKingSideRook(1);
        }
        if (castling.indexOf("q") >= 0) {
          result[1] |= 1 << searchQueenSideRook(1);
        }
      }
      for (let file = 0; file < 8; ++file) {
        const s = (0, base_types_impl_1.fileToString)(file);
        if (castling.indexOf(s.toUpperCase()) >= 0) {
          result[0] |= 1 << file;
        }
        if (castling.indexOf(s) >= 0) {
          result[1] |= 1 << file;
        }
      }
      return result;
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/move_descriptor_impl.js
var require_move_descriptor_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/move_descriptor_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveDescriptorImpl = void 0;
    var base_types_impl_1 = require_base_types_impl();
    var exception_1 = require_exception();
    var move_descriptor_1 = require_move_descriptor();
    var CASTLING_FLAG = 1;
    var EN_PASSANT_FLAG = 2;
    var CAPTURE_FLAG = 4;
    var PROMOTION_FLAG = 8;
    var MoveDescriptorImpl = class extends move_descriptor_1.MoveDescriptor {
      constructor(flags, from, to, movingColoredPiece, finalColoredPiece, optionalColoredPiece, optionalSquare1, optionalSquare2) {
        super();
        this._flags = flags;
        this._from = from;
        this._to = to;
        this._movingColoredPiece = movingColoredPiece;
        this._finalColoredPiece = finalColoredPiece;
        this._optionalColoredPiece = optionalColoredPiece;
        this._optionalSquare1 = optionalSquare1;
        this._optionalSquare2 = optionalSquare2;
      }
      static make(from, to, movingColoredPiece, capturedColoredPiece) {
        const flags = capturedColoredPiece === -1 ? 0 : CAPTURE_FLAG;
        return new MoveDescriptorImpl(flags, from, to, movingColoredPiece, movingColoredPiece, capturedColoredPiece, -1, -1);
      }
      static makeCastling(from, to, rookFrom, rookTo, color) {
        const movingColoredKing = 0 * 2 + color;
        const movingColoredRook = 2 * 2 + color;
        return new MoveDescriptorImpl(CASTLING_FLAG, from, to, movingColoredKing, movingColoredKing, movingColoredRook, rookFrom, rookTo);
      }
      static makeEnPassant(from, to, enPassantSquare, color) {
        const flags = EN_PASSANT_FLAG | CAPTURE_FLAG;
        const movingColoredPawn = 5 * 2 + color;
        const capturedColoredPawn = 5 * 2 + 1 - color;
        return new MoveDescriptorImpl(flags, from, to, movingColoredPawn, movingColoredPawn, capturedColoredPawn, enPassantSquare, -1);
      }
      static makePromotion(from, to, color, capturedColoredPiece, promotion) {
        const flags = PROMOTION_FLAG | (capturedColoredPiece === -1 ? 0 : CAPTURE_FLAG);
        const movingColoredPawn = 5 * 2 + color;
        const finalColoredPiece = promotion * 2 + color;
        return new MoveDescriptorImpl(flags, from, to, movingColoredPawn, finalColoredPiece, capturedColoredPiece, -1, -1);
      }
      isCastling() {
        return (this._flags & CASTLING_FLAG) !== 0;
      }
      isEnPassant() {
        return (this._flags & EN_PASSANT_FLAG) !== 0;
      }
      isCapture() {
        return (this._flags & CAPTURE_FLAG) !== 0;
      }
      isPromotion() {
        return (this._flags & PROMOTION_FLAG) !== 0;
      }
      from() {
        return (0, base_types_impl_1.squareToString)(this._from);
      }
      to() {
        return (0, base_types_impl_1.squareToString)(this._to);
      }
      color() {
        return (0, base_types_impl_1.colorToString)(this._movingColoredPiece % 2);
      }
      movingPiece() {
        return (0, base_types_impl_1.pieceToString)(Math.trunc(this._movingColoredPiece / 2));
      }
      movingColoredPiece() {
        return (0, base_types_impl_1.coloredPieceToString)(this._movingColoredPiece);
      }
      capturedPiece() {
        if (!this.isCapture()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.capturedPiece()");
        }
        return (0, base_types_impl_1.pieceToString)(Math.trunc(this._optionalColoredPiece / 2));
      }
      capturedColoredPiece() {
        if (!this.isCapture()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.capturedColoredPiece()");
        }
        return (0, base_types_impl_1.coloredPieceToString)(this._optionalColoredPiece);
      }
      rookFrom() {
        if (!this.isCastling()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.rookFrom()");
        }
        return (0, base_types_impl_1.squareToString)(this._optionalSquare1);
      }
      rookTo() {
        if (!this.isCastling()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.rookTo()");
        }
        return (0, base_types_impl_1.squareToString)(this._optionalSquare2);
      }
      enPassantSquare() {
        if (!this.isEnPassant()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.enPassantSquare()");
        }
        return (0, base_types_impl_1.squareToString)(this._optionalSquare1);
      }
      promotion() {
        if (!this.isPromotion()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.promotion()");
        }
        return (0, base_types_impl_1.pieceToString)(Math.trunc(this._finalColoredPiece / 2));
      }
      coloredPromotion() {
        if (!this.isPromotion()) {
          throw new exception_1.IllegalArgument("MoveDescriptor.coloredPromotion()");
        }
        return (0, base_types_impl_1.coloredPieceToString)(this._finalColoredPiece);
      }
    };
    exports.MoveDescriptorImpl = MoveDescriptorImpl;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/move_generation.js
var require_move_generation = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/move_generation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.playNullMove = exports.isNullMoveLegal = exports.play = exports.isMoveLegal = exports.isCastlingMoveLegal = exports.isCaptureMandatory = exports.moves = exports.hasMove = exports.isStalemate = exports.isCheckmate = exports.isCheck = void 0;
    var attacks_1 = require_attacks();
    var legality_1 = require_legality();
    var move_descriptor_impl_1 = require_move_descriptor_impl();
    var DISPLACEMENT_LOOKUP = [
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      60,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      768,
      60,
      768,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      768,
      2255,
      2111,
      2255,
      768,
      0,
      0,
      0,
      0,
      0,
      0,
      60,
      60,
      60,
      60,
      60,
      60,
      63,
      0,
      63,
      60,
      60,
      60,
      60,
      60,
      60,
      0,
      0,
      0,
      0,
      0,
      0,
      768,
      1231,
      1087,
      1231,
      768,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      768,
      60,
      768,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      60,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      0,
      204,
      0,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      0,
      0,
      0,
      204,
      0
    ];
    var SLIDING_DIRECTION = [
      -17,
      0,
      0,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      -17,
      0,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      -17,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      -17,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -17,
      0,
      0,
      -16,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -17,
      0,
      -16,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -17,
      -16,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      16,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      16,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      16,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0
    ];
    function hasAtLeastOnePiece(position, color) {
      for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
        if (position.board[sq] !== -1 && position.board[sq] % 2 === color) {
          return true;
        }
      }
      return false;
    }
    function isKingToMoveAttacked(position) {
      return position.king[position.turn] >= 0 && (0, attacks_1.isAttacked)(position, position.king[position.turn], 1 - position.turn);
    }
    function isCheck(position) {
      return (0, legality_1.isLegal)(position) && isKingToMoveAttacked(position);
    }
    exports.isCheck = isCheck;
    function isCheckmate(position) {
      if (!(0, legality_1.isLegal)(position) || hasMove(position)) {
        return false;
      }
      if (position.variant === 5) {
        return true;
      } else if (position.variant === 6 && position.turn === 0) {
        return !hasAtLeastOnePiece(position, 0);
      } else {
        return isKingToMoveAttacked(position);
      }
    }
    exports.isCheckmate = isCheckmate;
    function isStalemate(position) {
      if (!(0, legality_1.isLegal)(position) || hasMove(position)) {
        return false;
      }
      if (position.variant === 5) {
        return true;
      } else if (position.variant === 6 && position.turn === 0) {
        return hasAtLeastOnePiece(position, 0);
      } else {
        return !isKingToMoveAttacked(position);
      }
    }
    exports.isStalemate = isStalemate;
    function hasMove(position) {
      class MoveFound {
      }
      try {
        generateMoves(position, () => {
          throw new MoveFound();
        });
        return false;
      } catch (err) {
        if (err instanceof MoveFound) {
          return true;
        } else {
          throw err;
        }
      }
    }
    exports.hasMove = hasMove;
    function moves(position) {
      const result = [];
      generateMoves(position, (moveDescriptor) => {
        result.push(moveDescriptor);
      });
      return result;
    }
    exports.moves = moves;
    function generateMoves(position, moveDescriptorConsumer) {
      if (!(0, legality_1.isLegal)(position)) {
        return;
      }
      const nonCaptureIsAllowed = !isCaptureMandatory(position);
      (0, legality_1.refreshEffectiveCastling)(position);
      if (nonCaptureIsAllowed && position.effectiveCastling[position.turn] !== 0) {
        const rankOffset = 112 * position.turn;
        for (let file = 0; file < 8; ++file) {
          if ((position.effectiveCastling[position.turn] & 1 << file) !== 0) {
            const rookFrom = rankOffset + file;
            const rookTo = rankOffset + (rookFrom < position.king[position.turn] ? 3 : 5);
            const to = rankOffset + (rookFrom < position.king[position.turn] ? 2 : 6);
            if (isCastlingLegal(position, position.king[position.turn], to, rookFrom, rookTo)) {
              moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makeCastling(position.king[position.turn], to, rookFrom, rookTo, position.turn));
            }
          }
        }
      }
      (0, legality_1.refreshEffectiveEnPassant)(position);
      if (position.effectiveEnPassant >= 0) {
        const square3 = (5 - position.turn * 3) * 16 + position.effectiveEnPassant;
        const square4 = (4 - position.turn) * 16 + position.effectiveEnPassant;
        const capturingPawn = 5 * 2 + position.turn;
        if ((square4 - 1 & 136) === 0 && position.board[square4 - 1] === capturingPawn && (0, legality_1.isKingSafeAfterMove)(position, square4 - 1, square3, square4)) {
          moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makeEnPassant(square4 - 1, square3, square4, position.turn));
        }
        if ((square4 + 1 & 136) === 0 && position.board[square4 + 1] === capturingPawn && (0, legality_1.isKingSafeAfterMove)(position, square4 + 1, square3, square4)) {
          moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makeEnPassant(square4 + 1, square3, square4, position.turn));
        }
      }
      for (let from = 0; from < 120; from += (from & 7) === 7 ? 9 : 1) {
        const fromContent = position.board[from];
        const movingPiece = Math.trunc(fromContent / 2);
        if (fromContent === -1 || fromContent % 2 !== position.turn) {
          continue;
        }
        if (movingPiece === 5) {
          const attackDirections = attacks_1.ATTACK_DIRECTIONS[fromContent];
          for (let i = 0; i < attackDirections.length; ++i) {
            const to = from + attackDirections[i];
            if ((to & 136) === 0 && position.board[to] !== -1 && position.board[to] % 2 !== position.turn && (0, legality_1.isKingSafeAfterMove)(position, from, to)) {
              generateRegularPawnMoveOrPromotion(position, from, to, moveDescriptorConsumer);
            }
          }
          if (nonCaptureIsAllowed) {
            const moveDirection = 16 - position.turn * 32;
            let to = from + moveDirection;
            if (position.board[to] === -1) {
              if ((0, legality_1.isKingSafeAfterMove)(position, from, to)) {
                generateRegularPawnMoveOrPromotion(position, from, to, moveDescriptorConsumer);
              }
              const firstSquareOfArea = position.turn * 96;
              if (from >= firstSquareOfArea && from < firstSquareOfArea + 24) {
                to += moveDirection;
                if (position.board[to] === -1 && (0, legality_1.isKingSafeAfterMove)(position, from, to)) {
                  moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, fromContent, -1));
                }
              }
            }
          }
        } else if (movingPiece === 4 || movingPiece === 0) {
          const directions = attacks_1.ATTACK_DIRECTIONS[fromContent];
          for (let i = 0; i < directions.length; ++i) {
            const to = from + directions[i];
            if ((to & 136) === 0) {
              const toContent = position.board[to];
              if ((toContent === -1 ? nonCaptureIsAllowed : toContent % 2 !== position.turn) && (0, legality_1.isKingSafeAfterMove)(position, from, to)) {
                moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, fromContent, toContent));
              }
            }
          }
        } else {
          const directions = attacks_1.ATTACK_DIRECTIONS[fromContent];
          for (let i = 0; i < directions.length; ++i) {
            for (let to = from + directions[i]; (to & 136) === 0; to += directions[i]) {
              const toContent = position.board[to];
              if ((toContent === -1 ? nonCaptureIsAllowed : toContent % 2 !== position.turn) && (0, legality_1.isKingSafeAfterMove)(position, from, to)) {
                moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, fromContent, toContent));
              }
              if (toContent !== -1) {
                break;
              }
            }
          }
        }
      }
    }
    function generateRegularPawnMoveOrPromotion(position, from, to, moveDescriptorConsumer) {
      const toContent = position.board[to];
      if (to < 8 || to >= 112) {
        moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, 1));
        moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, 2));
        moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, 3));
        moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, 4));
        if (position.variant === 5) {
          moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, 0));
        }
      } else {
        moveDescriptorConsumer(move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, 5 * 2 + position.turn, toContent));
      }
    }
    function isCaptureMandatory(position) {
      if (position.variant !== 5) {
        return false;
      }
      for (let sq = 0; sq < 120; sq += (sq & 7) === 7 ? 9 : 1) {
        const cp = position.board[sq];
        if (cp !== -1 && cp % 2 !== position.turn && (0, attacks_1.isAttacked)(position, sq, position.turn)) {
          return true;
        }
      }
      (0, legality_1.refreshEffectiveEnPassant)(position);
      if (position.effectiveEnPassant >= 0) {
        return true;
      }
      return false;
    }
    exports.isCaptureMandatory = isCaptureMandatory;
    function isCastlingMoveLegal(position, from, to) {
      let rookFrom = -1;
      let rookTo = -1;
      if (position.variant === 1) {
        const castleFile = to % 16;
        const castleRank = Math.trunc(to / 16);
        if (castleRank !== position.turn * 7 || (position.effectiveCastling[position.turn] & 1 << castleFile) === 0) {
          return false;
        }
        rookFrom = to;
        rookTo = (from > to ? 3 : 5) + 112 * position.turn;
        to = (from > to ? 2 : 6) + 112 * position.turn;
      } else if (to === 2 + position.turn * 112) {
        if ((position.effectiveCastling[position.turn] & 1) === 0) {
          return false;
        }
        rookFrom = 112 * position.turn;
        rookTo = 3 + 112 * position.turn;
      } else if (to === 6 + position.turn * 112) {
        if ((position.effectiveCastling[position.turn] & 1 << 7) === 0) {
          return false;
        }
        rookFrom = 7 + 112 * position.turn;
        rookTo = 5 + 112 * position.turn;
      } else {
        return false;
      }
      return isCastlingLegal(position, from, to, rookFrom, rookTo) ? move_descriptor_impl_1.MoveDescriptorImpl.makeCastling(from, to, rookFrom, rookTo, position.turn) : false;
    }
    exports.isCastlingMoveLegal = isCastlingMoveLegal;
    function isCastlingLegal(position, from, to, rookFrom, rookTo) {
      position.board[from] = -1;
      position.board[rookFrom] = -1;
      try {
        for (let sq = Math.min(from, to, rookFrom, rookTo); sq <= Math.max(from, to, rookFrom, rookTo); ++sq) {
          if (position.board[sq] !== -1) {
            return false;
          }
        }
        const byWho = 1 - position.turn;
        for (let sq = Math.min(from, to); sq <= Math.max(from, to); ++sq) {
          if ((0, attacks_1.isAttacked)(position, sq, byWho)) {
            return false;
          }
        }
        return true;
      } finally {
        position.board[from] = 0 * 2 + position.turn;
        position.board[rookFrom] = 2 * 2 + position.turn;
      }
    }
    function isMoveLegal(position, from, to) {
      if (!(0, legality_1.isLegal)(position)) {
        return false;
      }
      const fromContent = position.board[from];
      const toContent = position.board[to];
      const movingPiece = Math.trunc(fromContent / 2);
      if (fromContent === -1 || fromContent % 2 !== position.turn) {
        return false;
      }
      const displacement = to - from + 119;
      let enPassantSquare = -1;
      let isTwoSquarePawnMove = false;
      const isPromotion = movingPiece === 5 && (to < 8 || to >= 112);
      const captureIsMandatory = isCaptureMandatory(position);
      if (movingPiece === 0 && !captureIsMandatory) {
        (0, legality_1.refreshEffectiveCastling)(position);
        if (position.effectiveCastling[position.turn] !== 0) {
          const castlingDescriptor = isCastlingMoveLegal(position, from, to);
          if (castlingDescriptor) {
            return {
              type: "regular",
              moveDescriptor: castlingDescriptor
            };
          }
        }
      }
      if ((DISPLACEMENT_LOOKUP[displacement] & 1 << fromContent) === 0) {
        if (movingPiece === 5 && displacement === 151 - position.turn * 64) {
          const firstSquareOfArea = position.turn * 96;
          if (from < firstSquareOfArea || from >= firstSquareOfArea + 24) {
            return false;
          }
          isTwoSquarePawnMove = true;
        } else {
          return false;
        }
      }
      if (movingPiece === 5) {
        (0, legality_1.refreshEffectiveEnPassant)(position);
        if (displacement === 135 - position.turn * 32 || isTwoSquarePawnMove) {
          if (captureIsMandatory || toContent !== -1) {
            return false;
          }
        } else if (toContent === -1) {
          if (to !== (5 - position.turn * 3) * 16 + position.effectiveEnPassant) {
            return false;
          }
          enPassantSquare = (4 - position.turn) * 16 + position.effectiveEnPassant;
        } else {
          if (toContent % 2 === position.turn) {
            return false;
          }
        }
      } else {
        if (toContent === -1 ? captureIsMandatory : toContent % 2 === position.turn) {
          return false;
        }
      }
      if (movingPiece === 3 || movingPiece === 2 || movingPiece === 1) {
        const direction = SLIDING_DIRECTION[displacement];
        for (let sq = from + direction; sq !== to; sq += direction) {
          if (position.board[sq] !== -1) {
            return false;
          }
        }
      } else if (isTwoSquarePawnMove) {
        if (position.board[(from + to) / 2] !== -1) {
          return false;
        }
      }
      if (!(0, legality_1.isKingSafeAfterMove)(position, from, to, enPassantSquare)) {
        return false;
      }
      if (isPromotion) {
        return {
          type: "promotion",
          moveDescriptorFactory: buildPromotionMoveDescriptor(from, to, position.variant, position.turn, toContent)
        };
      } else {
        return {
          type: "regular",
          moveDescriptor: enPassantSquare >= 0 ? move_descriptor_impl_1.MoveDescriptorImpl.makeEnPassant(from, to, enPassantSquare, position.turn) : move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, fromContent, toContent)
        };
      }
    }
    exports.isMoveLegal = isMoveLegal;
    function buildPromotionMoveDescriptor(from, to, variant, color, capturedColoredPiece) {
      return (promotion) => {
        if (promotion === 5 || promotion === 0 && variant !== 5) {
          return false;
        }
        return move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, color, capturedColoredPiece, promotion);
      };
    }
    function play(position, descriptor) {
      (0, legality_1.refreshEffectiveCastling)(position);
      position.board[descriptor._from] = -1;
      if (descriptor.isEnPassant()) {
        position.board[descriptor._optionalSquare1] = -1;
      } else if (descriptor.isCastling()) {
        position.board[descriptor._optionalSquare1] = -1;
        position.board[descriptor._optionalSquare2] = descriptor._optionalColoredPiece;
      }
      position.board[descriptor._to] = descriptor._finalColoredPiece;
      const movingPiece = Math.trunc(descriptor._movingColoredPiece / 2);
      if (movingPiece === 0) {
        position.effectiveCastling[position.turn] = 0;
      }
      if (descriptor._from < 8) {
        position.effectiveCastling[0] &= ~(1 << descriptor._from);
      }
      if (descriptor._to < 8) {
        position.effectiveCastling[0] &= ~(1 << descriptor._to);
      }
      if (descriptor._from >= 112) {
        position.effectiveCastling[1] &= ~(1 << descriptor._from % 16);
      }
      if (descriptor._to >= 112) {
        position.effectiveCastling[1] &= ~(1 << descriptor._to % 16);
      }
      position.castling[0] = position.effectiveCastling[0];
      position.castling[1] = position.effectiveCastling[1];
      position.enPassant = -1;
      position.effectiveEnPassant = -1;
      if (movingPiece === 5 && Math.abs(descriptor._from - descriptor._to) === 32) {
        const firstSquareOf2ndRow = (1 + 5 * position.turn) * 16;
        if (descriptor._from >= firstSquareOf2ndRow && descriptor._from < firstSquareOf2ndRow + 8) {
          const otherPawn = descriptor._movingColoredPiece ^ 1;
          if ((descriptor._to - 1 & 136) === 0 && position.board[descriptor._to - 1] === otherPawn || (descriptor._to + 1 & 136) === 0 && position.board[descriptor._to + 1] === otherPawn) {
            position.enPassant = descriptor._to % 16;
            position.effectiveEnPassant = null;
          }
        }
      }
      if (movingPiece === 0 && position.king[position.turn] >= 0) {
        position.king[position.turn] = descriptor._to;
      }
      position.turn = 1 - position.turn;
    }
    exports.play = play;
    function isNullMoveLegal(position) {
      return (0, legality_1.isLegal)(position) && !isKingToMoveAttacked(position);
    }
    exports.isNullMoveLegal = isNullMoveLegal;
    function playNullMove(position) {
      if (isNullMoveLegal(position)) {
        position.turn = 1 - position.turn;
        position.enPassant = -1;
        position.effectiveEnPassant = -1;
        return true;
      } else {
        return false;
      }
    }
    exports.playNullMove = playNullMove;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/notation.js
var require_notation = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/notation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseNotation = exports.getNotation = void 0;
    var attacks_1 = require_attacks();
    var base_types_impl_1 = require_base_types_impl();
    var fen_1 = require_fen();
    var impl_1 = require_impl();
    var legality_1 = require_legality();
    var move_descriptor_impl_1 = require_move_descriptor_impl();
    var move_generation_1 = require_move_generation();
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    function getNotation(position, descriptor, pieceStyle) {
      let result = "";
      if (descriptor.isCastling()) {
        result = descriptor._to % 16 === 6 ? "O-O" : "O-O-O";
      } else if (Math.trunc(descriptor._movingColoredPiece / 2) === 5) {
        if (descriptor.isCapture()) {
          result += (0, base_types_impl_1.fileToString)(descriptor._from % 16) + "x";
        }
        result += (0, base_types_impl_1.squareToString)(descriptor._to);
        if (descriptor.isPromotion()) {
          result += "=" + getPieceSymbol(descriptor._finalColoredPiece, pieceStyle);
        }
      } else {
        result += getPieceSymbol(descriptor._movingColoredPiece, pieceStyle);
        result += getDisambiguationSymbol(position, descriptor._from, descriptor._to);
        if (descriptor.isCapture()) {
          result += "x";
        }
        result += (0, base_types_impl_1.squareToString)(descriptor._to);
      }
      result += getCheckCheckmateSymbol(position, descriptor);
      return result;
    }
    exports.getNotation = getNotation;
    function getPieceSymbol(coloredPiece, pieceStyle) {
      switch (pieceStyle) {
        case "figurine":
          return (0, base_types_impl_1.figurineToString)(coloredPiece);
        case "standard":
          return (0, base_types_impl_1.pieceToString)(Math.trunc(coloredPiece / 2)).toUpperCase();
      }
    }
    function getCheckCheckmateSymbol(position, descriptor) {
      const nextPosition = (0, impl_1.makeCopy)(position);
      (0, move_generation_1.play)(nextPosition, descriptor);
      return (0, move_generation_1.isCheckmate)(nextPosition) ? "#" : (0, move_generation_1.isCheck)(nextPosition) ? "+" : "";
    }
    function getDisambiguationSymbol(position, from, to) {
      const attackers = (0, attacks_1.getAttacks)(position, to, position.turn).filter((sq) => position.board[sq] === position.board[from]);
      if (attackers.length < 2) {
        return "";
      }
      let foundNotPined = false;
      let foundOnSameRank = false;
      let foundOnSameFile = false;
      const rankFrom = Math.trunc(from / 16);
      const fileFrom = from % 16;
      for (let i = 0; i < attackers.length; ++i) {
        const sq = attackers[i];
        if (sq === from || isPinned(position, sq, to)) {
          continue;
        }
        foundNotPined = true;
        if (rankFrom === Math.trunc(sq / 16)) {
          foundOnSameRank = true;
        }
        if (fileFrom === sq % 16) {
          foundOnSameFile = true;
        }
      }
      if (foundOnSameFile) {
        return foundOnSameRank ? (0, base_types_impl_1.squareToString)(from) : (0, base_types_impl_1.rankToString)(rankFrom);
      } else {
        return foundNotPined ? (0, base_types_impl_1.fileToString)(fileFrom) : "";
      }
    }
    function isPinned(position, sq, aimingAtSq) {
      const kingSquare = position.king[position.turn];
      if (kingSquare < 0) {
        return false;
      }
      const vector = Math.abs(kingSquare - sq);
      const aimingAtVector = Math.abs(aimingAtSq - sq);
      const pinnerQueen = 1 * 2 + 1 - position.turn;
      const pinnerRook = 2 * 2 + 1 - position.turn;
      const pinnerBishop = 3 * 2 + 1 - position.turn;
      if (vector < 8) {
        return aimingAtVector >= 8 && pinningLoockup(position, kingSquare, sq, kingSquare < sq ? 1 : -1, pinnerRook, pinnerQueen);
      } else if (vector % 16 === 0) {
        return aimingAtVector % 16 !== 0 && pinningLoockup(position, kingSquare, sq, kingSquare < sq ? 16 : -16, pinnerRook, pinnerQueen);
      } else if (vector % 15 === 0) {
        return aimingAtVector % 15 !== 0 && pinningLoockup(position, kingSquare, sq, kingSquare < sq ? 15 : -15, pinnerBishop, pinnerQueen);
      } else if (vector % 17 === 0) {
        return aimingAtVector % 17 !== 0 && pinningLoockup(position, kingSquare, sq, kingSquare < sq ? 17 : -17, pinnerBishop, pinnerQueen);
      } else {
        return false;
      }
    }
    function pinningLoockup(position, kingSquare, targetSquare, direction, pinnerColoredPiece1, pinnerColoredPiece2) {
      for (let sq = kingSquare + direction; sq !== targetSquare; sq += direction) {
        if (position.board[sq] !== -1) {
          return false;
        }
      }
      for (let sq = targetSquare + direction; (sq & 136) === 0; sq += direction) {
        if (position.board[sq] !== -1) {
          return position.board[sq] === pinnerColoredPiece1 || position.board[sq] === pinnerColoredPiece2;
        }
      }
      return false;
    }
    function parseNotation(position, notation, strict, pieceStyle) {
      const m = /^(?:(O-O-O|0-0-0)|(O-O|0-0)|([A-Z\u2654-\u265f])([a-h])?([1-8])?(x)?([a-h][1-8])|(?:([a-h])(x)?)?([a-h][1-8])(?:(=)?([A-Z\u2654-\u265f]))?)([+#])?$/.exec(notation);
      if (m === null) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_MOVE_NOTATION_SYNTAX);
      }
      if (!(0, legality_1.isLegal)(position)) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_POSITION);
      }
      let descriptor = false;
      if (m[1] !== void 0 || m[2] !== void 0) {
        descriptor = parseCastlingNotation(position, notation, strict, m[1], m[2]);
      } else if (m[3] !== void 0) {
        descriptor = parseNonPawnNotation(position, notation, strict, pieceStyle, m[3], m[4], m[5], m[7]);
      } else {
        descriptor = parsePawnMoveNotation(position, notation, strict, pieceStyle, m[8], m[10], m[11], m[12]);
      }
      if (strict) {
        const observedIsCapture = m[6] !== void 0 || m[9] !== void 0;
        if (descriptor.isCapture() !== observedIsCapture) {
          const message = descriptor.isCapture() ? i18n_1.i18n.MISSING_CAPTURE_SYMBOL : i18n_1.i18n.INVALID_CAPTURE_SYMBOL;
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, message);
        }
        const expectedCCS = getCheckCheckmateSymbol(position, descriptor);
        const observedCCS = m[13] === void 0 ? "" : m[13];
        if (expectedCCS !== observedCCS) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.WRONG_CHECK_CHECKMATE_SYMBOL, expectedCCS, observedCCS);
        }
      }
      return descriptor;
    }
    exports.parseNotation = parseNotation;
    function parseCastlingNotation(position, notation, strict, queenSideCastlingSymbol, kingSideCastlingSymbol) {
      const from = position.king[position.turn];
      if (from < 0) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_NO_KING_CASTLING);
      }
      (0, legality_1.refreshEffectiveCastling)(position);
      const isKingSideCastling = kingSideCastlingSymbol !== void 0;
      const toFile = getCastlingDestinationFile(position, isKingSideCastling);
      const descriptor = toFile >= 0 ? (0, move_generation_1.isCastlingMoveLegal)(position, from, toFile + 112 * position.turn) : false;
      if (!descriptor) {
        const message = isKingSideCastling ? i18n_1.i18n.ILLEGAL_KING_SIDE_CASTLING : i18n_1.i18n.ILLEGAL_QUEEN_SIDE_CASTLING;
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, message);
      }
      if (strict) {
        const firstChar = (isKingSideCastling ? kingSideCastlingSymbol : queenSideCastlingSymbol).charAt(0);
        if (firstChar === "0") {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.CASTLING_MOVE_ENCODED_WITH_ZERO);
        }
      }
      return descriptor;
    }
    function getCastlingDestinationFile(position, isKingSideCastling) {
      if (position.variant === 1) {
        if (position.effectiveCastling[position.turn] !== 0) {
          const castlingKing = 0 * 2 + position.turn;
          for (let file = isKingSideCastling ? 7 : 0; position.board[file + 112 * position.turn] !== castlingKing; file += isKingSideCastling ? -1 : 1) {
            if ((position.effectiveCastling[position.turn] & 1 << file) !== 0) {
              return file;
            }
          }
        }
        return -1;
      } else {
        return isKingSideCastling ? 6 : 2;
      }
    }
    function parseNonPawnNotation(position, notation, strict, pieceStyle, pieceSymbol, fileDisambiguation, rankDisambiguation, destinationSquare) {
      const movingColoredPiece = parsePieceSymbol(position, notation, pieceSymbol, strict, pieceStyle) * 2 + position.turn;
      const to = (0, base_types_impl_1.squareFromString)(destinationSquare);
      const toContent = position.board[to];
      if (toContent !== -1 && toContent % 2 === position.turn) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.TRYING_TO_CAPTURE_YOUR_OWN_PIECES);
      }
      if (toContent === -1 && (0, move_generation_1.isCaptureMandatory)(position)) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.CAPTURE_IS_MANDATORY);
      }
      let attackers = (0, attacks_1.getAttacks)(position, to, position.turn).filter((sq) => position.board[sq] === movingColoredPiece);
      if (fileDisambiguation !== void 0) {
        const fileFrom = (0, base_types_impl_1.fileFromString)(fileDisambiguation);
        attackers = attackers.filter((sq) => sq % 16 === fileFrom);
      }
      if (rankDisambiguation !== void 0) {
        const rankFrom = (0, base_types_impl_1.rankFromString)(rankDisambiguation);
        attackers = attackers.filter((sq) => Math.trunc(sq / 16) === rankFrom);
      }
      if (attackers.length === 0) {
        const message = fileDisambiguation === void 0 && rankDisambiguation === void 0 ? i18n_1.i18n.NO_PIECE_CAN_MOVE_TO : i18n_1.i18n.NO_PIECE_CAN_MOVE_TO_DISAMBIGUATION;
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, message, pieceSymbol, destinationSquare);
      }
      let descriptor = false;
      for (let i = 0; i < attackers.length; ++i) {
        if ((0, legality_1.isKingSafeAfterMove)(position, attackers[i], to)) {
          if (descriptor) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.REQUIRE_DISAMBIGUATION, pieceSymbol, destinationSquare);
          }
          descriptor = move_descriptor_impl_1.MoveDescriptorImpl.make(attackers[i], to, movingColoredPiece, toContent);
        }
      }
      if (!descriptor) {
        const message = position.turn === 0 ? i18n_1.i18n.NOT_SAFE_FOR_WHITE_KING : i18n_1.i18n.NOT_SAFE_FOR_BLACK_KING;
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, message);
      }
      if (strict) {
        const expectedDS = getDisambiguationSymbol(position, descriptor._from, to);
        const observedDS = (fileDisambiguation === void 0 ? "" : fileDisambiguation) + (rankDisambiguation === void 0 ? "" : rankDisambiguation);
        if (expectedDS !== observedDS) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.WRONG_DISAMBIGUATION_SYMBOL, expectedDS, observedDS);
        }
      }
      return descriptor;
    }
    function parsePawnMoveNotation(position, notation, strict, pieceStyle, originFile, destinationSquare, promotionSymbol, promotedPiece) {
      const coloredPawn = 5 * 2 + position.turn;
      const to = (0, base_types_impl_1.squareFromString)(destinationSquare);
      const toContent = position.board[to];
      const vector = 16 - position.turn * 32;
      let from = to - vector;
      let enPassantSquare = -1;
      if (originFile !== void 0) {
        if ((from & 136) !== 0) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_CAPTURING_PAWN_MOVE);
        }
        const columnFrom = (0, base_types_impl_1.fileFromString)(originFile);
        const columnTo = to % 16;
        if (columnTo - columnFrom === 1) {
          from -= 1;
        } else if (columnTo - columnFrom === -1) {
          from += 1;
        } else {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_CAPTURING_PAWN_MOVE);
        }
        if (position.board[from] !== coloredPawn) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_CAPTURING_PAWN_MOVE);
        }
        if (toContent === -1) {
          (0, legality_1.refreshEffectiveEnPassant)(position);
          if (to !== (5 - position.turn * 3) * 16 + position.effectiveEnPassant) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_CAPTURING_PAWN_MOVE);
          }
          enPassantSquare = (4 - position.turn) * 16 + position.effectiveEnPassant;
        } else if (toContent % 2 === position.turn) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_CAPTURING_PAWN_MOVE);
        }
      } else if ((0, move_generation_1.isCaptureMandatory)(position)) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.CAPTURE_IS_MANDATORY);
      } else {
        if ((from & 136) !== 0) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_NON_CAPTURING_PAWN_MOVE);
        }
        if (toContent !== -1) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_NON_CAPTURING_PAWN_MOVE);
        }
        if (position.board[from] === -1) {
          from -= vector;
          const firstSquareOfArea = position.turn * 96;
          if (from < firstSquareOfArea || from >= firstSquareOfArea + 24 || position.board[from] !== coloredPawn) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_NON_CAPTURING_PAWN_MOVE);
          }
        } else if (position.board[from] !== coloredPawn) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_NON_CAPTURING_PAWN_MOVE);
        }
      }
      if (!(0, legality_1.isKingSafeAfterMove)(position, from, to, enPassantSquare)) {
        const message = position.turn === 0 ? i18n_1.i18n.NOT_SAFE_FOR_WHITE_KING : i18n_1.i18n.NOT_SAFE_FOR_BLACK_KING;
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, message);
      }
      if (to < 8 || to >= 112) {
        if (promotedPiece === void 0) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.MISSING_PROMOTION);
        }
        const promotion = parsePieceSymbol(position, notation, promotedPiece, strict, pieceStyle);
        if (promotion === 5 || promotion === 0 && position.variant !== 5) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_PROMOTED_PIECE, promotedPiece);
        }
        if (strict && promotionSymbol === void 0) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.MISSING_PROMOTION_SYMBOL);
        }
        return move_descriptor_impl_1.MoveDescriptorImpl.makePromotion(from, to, position.turn, toContent, promotion);
      } else {
        if (promotedPiece !== void 0) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_PROMOTION);
        }
        return enPassantSquare >= 0 ? move_descriptor_impl_1.MoveDescriptorImpl.makeEnPassant(from, to, enPassantSquare, position.turn) : move_descriptor_impl_1.MoveDescriptorImpl.make(from, to, coloredPawn, toContent);
      }
    }
    function parsePieceSymbol(position, notation, pieceSymbol, strict, pieceStyle) {
      switch (pieceStyle) {
        case "figurine": {
          const coloredPieceCode = (0, base_types_impl_1.figurineFromString)(pieceSymbol);
          if (coloredPieceCode < 0) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_PIECE_SYMBOL, pieceSymbol);
          }
          if (strict && coloredPieceCode % 2 !== position.turn) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_PIECE_SYMBOL_COLOR, pieceSymbol);
          }
          return Math.trunc(coloredPieceCode / 2);
        }
        case "standard": {
          const pieceCode = (0, base_types_impl_1.pieceFromString)(pieceSymbol.toLowerCase());
          if (pieceCode < 0) {
            throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_PIECE_SYMBOL, pieceSymbol);
          }
          return pieceCode;
        }
      }
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/uci.js
var require_uci = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_position/uci.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseUCINotation = exports.getUCINotation = void 0;
    var base_types_impl_1 = require_base_types_impl();
    var fen_1 = require_fen();
    var legality_1 = require_legality();
    var move_generation_1 = require_move_generation();
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    function getUCINotation(position, descriptor, forceKxR) {
      let result = descriptor.from();
      if (descriptor.isCastling()) {
        result += forceKxR || position.variant === 1 ? descriptor.rookFrom() : descriptor.to();
      } else {
        result += descriptor.to();
      }
      if (descriptor.isPromotion()) {
        result += descriptor.promotion();
      }
      return result;
    }
    exports.getUCINotation = getUCINotation;
    function parseUCINotation(position, notation, strict) {
      const m = /^([a-h][1-8])([a-h][1-8])([kqrbnp]?)$/.exec(notation);
      if (m === null) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.INVALID_UCI_NOTATION_SYNTAX);
      }
      if (!(0, legality_1.isLegal)(position)) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_POSITION);
      }
      const from = (0, base_types_impl_1.squareFromString)(m[1]);
      let to = (0, base_types_impl_1.squareFromString)(m[2]);
      let kxRSubstitutionApplied = false;
      let expectedRookFrom = -1;
      if (position.variant !== 1 && !strict && position.board[from] !== -1 && position.board[to] !== -1 && position.board[from] % 2 === position.board[to] % 2) {
        const fromPiece = Math.trunc(position.board[from] / 2);
        const toPiece = Math.trunc(position.board[to] / 2);
        if (fromPiece === 0 && toPiece === 2) {
          kxRSubstitutionApplied = true;
          expectedRookFrom = to;
          to = position.turn * 112 + (from < to ? 6 : 2);
        }
      }
      const candidate = (0, move_generation_1.isMoveLegal)(position, from, to);
      let result = false;
      if (!candidate) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_UCI_MOVE);
      }
      if (candidate.type === "promotion") {
        if (m[3] === "") {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_UCI_MOVE);
        }
        result = candidate.moveDescriptorFactory((0, base_types_impl_1.pieceFromString)(m[3]));
        if (!result) {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_UCI_MOVE);
        }
      } else {
        if (m[3] !== "") {
          throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_UCI_MOVE);
        }
        result = candidate.moveDescriptor;
      }
      if (kxRSubstitutionApplied && (!result.isCastling() || expectedRookFrom !== result._optionalSquare1)) {
        throw new exception_1.InvalidNotation((0, fen_1.getFEN)(position), notation, i18n_1.i18n.ILLEGAL_UCI_MOVE);
      }
      return result;
    }
    exports.parseUCINotation = parseUCINotation;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/position.js
var require_position = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/position.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Position = void 0;
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    var attacks_1 = require_attacks();
    var base_types_impl_1 = require_base_types_impl();
    var fen_1 = require_fen();
    var impl_1 = require_impl();
    var legality_1 = require_legality();
    var move_descriptor_impl_1 = require_move_descriptor_impl();
    var move_generation_1 = require_move_generation();
    var notation_1 = require_notation();
    var uci_1 = require_uci();
    var Position = class {
      constructor(arg0, arg1) {
        switch (arguments.length) {
          case 0:
            this._impl = (0, impl_1.makeInitial)(0);
            break;
          case 1: {
            if (arg0 === "start") {
              this._impl = (0, impl_1.makeInitial)(0);
            } else if (arg0 === "empty") {
              this._impl = (0, impl_1.makeEmpty)(0);
            } else if (arg0 instanceof Position) {
              this._impl = (0, impl_1.makeCopy)(arg0._impl);
            } else {
              const variantCode = (0, base_types_impl_1.variantFromString)(arg0);
              if (variantCode >= 0) {
                if (!(0, impl_1.hasCanonicalStartPosition)(variantCode)) {
                  throw new exception_1.IllegalArgument("Position()");
                }
                this._impl = (0, impl_1.makeInitial)(variantCode);
              } else if (typeof arg0 === "string") {
                const separatorIndex = arg0.indexOf(":");
                if (separatorIndex < 0) {
                  this._impl = (0, fen_1.parseFEN)(0, arg0, false).position;
                } else {
                  const variantPrefix = arg0.substring(0, separatorIndex);
                  const variantPrefixCode = (0, base_types_impl_1.variantFromString)(variantPrefix);
                  if (variantPrefixCode < 0) {
                    throw new exception_1.InvalidFEN(arg0, i18n_1.i18n.INVALID_VARIANT_PREFIX, variantPrefix);
                  }
                  this._impl = (0, fen_1.parseFEN)(variantPrefixCode, arg0.substring(separatorIndex + 1), false).position;
                }
              } else {
                throw new exception_1.IllegalArgument("Position()");
              }
            }
            break;
          }
          default: {
            const variantCode = (0, base_types_impl_1.variantFromString)(arg0);
            if (variantCode < 0) {
              throw new exception_1.IllegalArgument("Position()");
            }
            if (arg1 === "start") {
              if (!(0, impl_1.hasCanonicalStartPosition)(variantCode)) {
                throw new exception_1.IllegalArgument("Position()");
              }
              this._impl = (0, impl_1.makeInitial)(variantCode);
            } else if (arg1 === "empty") {
              this._impl = (0, impl_1.makeEmpty)(variantCode);
            } else if (typeof arg1 === "number") {
              if (variantCode !== 1 || !isValidScharnaglCode(arg1)) {
                throw new exception_1.IllegalArgument("Position()");
              }
              this._impl = (0, impl_1.make960FromScharnagl)(arg1);
            } else if (typeof arg1 === "string") {
              this._impl = (0, fen_1.parseFEN)(variantCode, arg1, false).position;
            } else {
              throw new exception_1.IllegalArgument("Position()");
            }
            break;
          }
        }
      }
      clear(variant = "regular") {
        const variantCode = (0, base_types_impl_1.variantFromString)(variant);
        if (variantCode < 0) {
          throw new exception_1.IllegalArgument("Position.clear()");
        }
        this._impl = (0, impl_1.makeEmpty)(variantCode);
      }
      reset() {
        this._impl = (0, impl_1.makeInitial)(0);
      }
      reset960(scharnaglCode) {
        if (!isValidScharnaglCode(scharnaglCode)) {
          throw new exception_1.IllegalArgument("Position.reset960()");
        }
        this._impl = (0, impl_1.make960FromScharnagl)(scharnaglCode);
      }
      resetAntichess() {
        this._impl = (0, impl_1.makeInitial)(5);
      }
      resetHorde() {
        this._impl = (0, impl_1.makeInitial)(6);
      }
      static isEqual(pos1, pos2) {
        return pos1 instanceof Position && pos2 instanceof Position && (0, legality_1.isEqual)(pos1._impl, pos2._impl);
      }
      ascii() {
        return (0, fen_1.ascii)(this._impl);
      }
      fen(fenOrOptions, strict) {
        if (arguments.length === 0) {
          return (0, fen_1.getFEN)(this._impl);
        } else if (arguments.length === 1 && typeof fenOrOptions === "object") {
          const validate = buildValidator(fenOrOptions, "Position.fen()");
          const fiftyMoveClock = validate("fiftyMoveClock", 0, (val) => Number.isInteger(val));
          const fullMoveNumber = validate("fullMoveNumber", 1, (val) => Number.isInteger(val));
          const withVariant = validate("withVariant", false, (val) => typeof val === "boolean");
          const regularFENIfPossible = validate("regularFENIfPossible", false, (val) => typeof val === "boolean");
          return (withVariant ? (0, base_types_impl_1.variantToString)(this._impl.variant) + ":" : "") + (0, fen_1.getFEN)(this._impl, fiftyMoveClock, fullMoveNumber, regularFENIfPossible);
        } else if (arguments.length === 1 && typeof fenOrOptions === "string") {
          const result = (0, fen_1.parseFEN)(this._impl.variant, fenOrOptions, false);
          this._impl = result.position;
          return { fiftyMoveClock: result.fiftyMoveClock, fullMoveNumber: result.fullMoveNumber };
        } else if (arguments.length >= 2 && typeof fenOrOptions === "string" && typeof strict === "boolean") {
          const result = (0, fen_1.parseFEN)(this._impl.variant, fenOrOptions, strict);
          this._impl = result.position;
          return { fiftyMoveClock: result.fiftyMoveClock, fullMoveNumber: result.fullMoveNumber };
        } else {
          throw new exception_1.IllegalArgument("Position.fen()");
        }
      }
      variant() {
        return (0, base_types_impl_1.variantToString)(this._impl.variant);
      }
      square(square, value) {
        const squareCode = (0, base_types_impl_1.squareFromString)(square);
        if (squareCode < 0) {
          throw new exception_1.IllegalArgument("Position.square()");
        }
        if (arguments.length === 1) {
          const cp = this._impl.board[squareCode];
          return cp === -1 ? "-" : (0, base_types_impl_1.coloredPieceToString)(cp);
        } else if (value === "-") {
          this._impl.board[squareCode] = -1;
          this._impl.legal = null;
          this._impl.effectiveCastling = null;
          this._impl.effectiveEnPassant = null;
        } else {
          const cp = (0, base_types_impl_1.coloredPieceFromString)(value);
          if (cp < 0) {
            throw new exception_1.IllegalArgument("Position.square()");
          }
          this._impl.board[squareCode] = cp;
          this._impl.legal = null;
          this._impl.effectiveCastling = null;
          this._impl.effectiveEnPassant = null;
        }
      }
      turn(value) {
        if (arguments.length === 0) {
          return (0, base_types_impl_1.colorToString)(this._impl.turn);
        } else {
          const colorCode = (0, base_types_impl_1.colorFromString)(value);
          if (colorCode < 0) {
            throw new exception_1.IllegalArgument("Position.turn()");
          }
          this._impl.turn = colorCode;
          this._impl.legal = null;
          this._impl.effectiveEnPassant = null;
        }
      }
      castling(castle, value) {
        if (typeof castle !== "string" || !(this._impl.variant === 1 ? /^[wb][a-h]$/ : /^[wb][kq]$/).test(castle)) {
          throw new exception_1.IllegalArgument("Position.castling()");
        }
        const color = (0, base_types_impl_1.colorFromString)(castle[0]);
        const file = this._impl.variant === 1 ? (0, base_types_impl_1.fileFromString)(castle[1]) : castle[1] === "k" ? 7 : 0;
        if (arguments.length === 1) {
          return (this._impl.castling[color] & 1 << file) !== 0;
        } else if (typeof value === "boolean") {
          if (value) {
            this._impl.castling[color] |= 1 << file;
          } else {
            this._impl.castling[color] &= ~(1 << file);
          }
          this._impl.effectiveCastling = null;
        } else {
          throw new exception_1.IllegalArgument("Position.castling()");
        }
      }
      effectiveCastling(castle) {
        if (typeof castle !== "string" || !(this._impl.variant === 1 ? /^[wb][a-h]$/ : /^[wb][kq]$/).test(castle)) {
          throw new exception_1.IllegalArgument("Position.effectiveCastling()");
        }
        const color = (0, base_types_impl_1.colorFromString)(castle[0]);
        const file = this._impl.variant === 1 ? (0, base_types_impl_1.fileFromString)(castle[1]) : castle[1] === "k" ? 7 : 0;
        (0, legality_1.refreshEffectiveCastling)(this._impl);
        return (this._impl.effectiveCastling[color] & 1 << file) !== 0;
      }
      enPassant(value) {
        if (arguments.length === 0) {
          return this._impl.enPassant < 0 ? "-" : (0, base_types_impl_1.fileToString)(this._impl.enPassant);
        } else if (value === "-") {
          this._impl.enPassant = -1;
          this._impl.effectiveEnPassant = -1;
        } else {
          const enPassantCode = (0, base_types_impl_1.fileFromString)(value);
          if (enPassantCode < 0) {
            throw new exception_1.IllegalArgument("Position.enPassant()");
          }
          this._impl.enPassant = enPassantCode;
          this._impl.effectiveEnPassant = null;
        }
      }
      effectiveEnPassant() {
        (0, legality_1.refreshEffectiveEnPassant)(this._impl);
        return this._impl.effectiveEnPassant < 0 ? "-" : (0, base_types_impl_1.fileToString)(this._impl.effectiveEnPassant);
      }
      isAttacked(square, byWho) {
        const squareCode = (0, base_types_impl_1.squareFromString)(square);
        const byWhoCode = (0, base_types_impl_1.colorFromString)(byWho);
        if (squareCode < 0 || byWhoCode < 0) {
          throw new exception_1.IllegalArgument("Position.isAttacked()");
        }
        return (0, attacks_1.isAttacked)(this._impl, squareCode, byWhoCode);
      }
      getAttacks(square, byWho) {
        const squareCode = (0, base_types_impl_1.squareFromString)(square);
        const byWhoCode = (0, base_types_impl_1.colorFromString)(byWho);
        if (squareCode < 0 || byWhoCode < 0) {
          throw new exception_1.IllegalArgument("Position.getAttacks()");
        }
        return (0, attacks_1.getAttacks)(this._impl, squareCode, byWhoCode).map(base_types_impl_1.squareToString);
      }
      isLegal() {
        return (0, legality_1.isLegal)(this._impl);
      }
      kingSquare(color) {
        const colorCode = (0, base_types_impl_1.colorFromString)(color);
        if (colorCode < 0) {
          throw new exception_1.IllegalArgument("Position.kingSquare()");
        }
        (0, legality_1.refreshLegalFlagAndKingSquares)(this._impl);
        const squareCode = this._impl.king[colorCode];
        return squareCode < 0 ? false : (0, base_types_impl_1.squareToString)(squareCode);
      }
      isCheck() {
        return (0, move_generation_1.isCheck)(this._impl);
      }
      isCheckmate() {
        return (0, move_generation_1.isCheckmate)(this._impl);
      }
      isStalemate() {
        return (0, move_generation_1.isStalemate)(this._impl);
      }
      hasMove() {
        return (0, move_generation_1.hasMove)(this._impl);
      }
      moves() {
        return (0, move_generation_1.moves)(this._impl);
      }
      isMoveLegal(from, to) {
        const fromCode = (0, base_types_impl_1.squareFromString)(from);
        const toCode = (0, base_types_impl_1.squareFromString)(to);
        if (fromCode < 0 || toCode < 0) {
          throw new exception_1.IllegalArgument("Position.isMoveLegal()");
        }
        const moveInfo = (0, move_generation_1.isMoveLegal)(this._impl, fromCode, toCode);
        if (!moveInfo) {
          return false;
        }
        switch (moveInfo.type) {
          case "promotion": {
            const result = (promotion) => {
              const promotionCode = (0, base_types_impl_1.pieceFromString)(promotion);
              if (promotionCode >= 0) {
                const moveDescriptor = moveInfo.moveDescriptorFactory(promotionCode);
                if (moveDescriptor) {
                  return moveDescriptor;
                }
              }
              throw new exception_1.IllegalArgument("Position.isMoveLegal()");
            };
            result.status = "promotion";
            return result;
          }
          case "regular": {
            const result = () => moveInfo.moveDescriptor;
            result.status = "regular";
            return result;
          }
        }
      }
      play(move) {
        if (typeof move === "string") {
          try {
            (0, move_generation_1.play)(this._impl, (0, notation_1.parseNotation)(this._impl, move, false, "standard"));
            return true;
          } catch (err) {
            if (err instanceof exception_1.InvalidNotation) {
              return false;
            } else {
              throw err;
            }
          }
        } else if (move instanceof move_descriptor_impl_1.MoveDescriptorImpl) {
          (0, move_generation_1.play)(this._impl, move);
          return true;
        } else {
          throw new exception_1.IllegalArgument("Position.play()");
        }
      }
      isNullMoveLegal() {
        return (0, move_generation_1.isNullMoveLegal)(this._impl);
      }
      playNullMove() {
        return (0, move_generation_1.playNullMove)(this._impl);
      }
      notation(moveOrDescriptor, strict) {
        if (arguments.length === 1 && moveOrDescriptor instanceof move_descriptor_impl_1.MoveDescriptorImpl) {
          return (0, notation_1.getNotation)(this._impl, moveOrDescriptor, "standard");
        } else if (arguments.length === 1 && typeof moveOrDescriptor === "string") {
          return (0, notation_1.parseNotation)(this._impl, moveOrDescriptor, false, "standard");
        } else if (arguments.length >= 2 && typeof moveOrDescriptor === "string" && typeof strict === "boolean") {
          return (0, notation_1.parseNotation)(this._impl, moveOrDescriptor, strict, "standard");
        } else {
          throw new exception_1.IllegalArgument("Position.notation()");
        }
      }
      figurineNotation(moveOrDescriptor, strict) {
        if (arguments.length === 1 && moveOrDescriptor instanceof move_descriptor_impl_1.MoveDescriptorImpl) {
          return (0, notation_1.getNotation)(this._impl, moveOrDescriptor, "figurine");
        } else if (arguments.length === 1 && typeof moveOrDescriptor === "string") {
          return (0, notation_1.parseNotation)(this._impl, moveOrDescriptor, false, "figurine");
        } else if (arguments.length >= 2 && typeof moveOrDescriptor === "string" && typeof strict === "boolean") {
          return (0, notation_1.parseNotation)(this._impl, moveOrDescriptor, strict, "figurine");
        } else {
          throw new exception_1.IllegalArgument("Position.figurineNotation()");
        }
      }
      uci(moveOrDescriptor, strictOrForceKxR) {
        if (arguments.length === 1 && moveOrDescriptor instanceof move_descriptor_impl_1.MoveDescriptorImpl) {
          return (0, uci_1.getUCINotation)(this._impl, moveOrDescriptor, false);
        } else if (arguments.length >= 2 && moveOrDescriptor instanceof move_descriptor_impl_1.MoveDescriptorImpl && typeof strictOrForceKxR === "boolean") {
          return (0, uci_1.getUCINotation)(this._impl, moveOrDescriptor, strictOrForceKxR);
        } else if (arguments.length === 1 && typeof moveOrDescriptor === "string") {
          return (0, uci_1.parseUCINotation)(this._impl, moveOrDescriptor, false);
        } else if (arguments.length >= 2 && typeof moveOrDescriptor === "string" && typeof strictOrForceKxR === "boolean") {
          return (0, uci_1.parseUCINotation)(this._impl, moveOrDescriptor, strictOrForceKxR);
        } else {
          throw new exception_1.IllegalArgument("Position.uci()");
        }
      }
    };
    exports.Position = Position;
    function isValidScharnaglCode(scharnaglCode) {
      return Number.isInteger(scharnaglCode) && scharnaglCode >= 0 && scharnaglCode < 960;
    }
    function buildValidator(options, functionName) {
      return function(key, defaultValue, validator) {
        if (options[key] === void 0) {
          return defaultValue;
        } else {
          const value = options[key];
          if (!validator(value)) {
            throw new exception_1.IllegalArgument(functionName);
          }
          return value;
        }
      };
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/node_variation.js
var require_node_variation = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/node_variation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variation = exports.Node = exports.AbstractNode = void 0;
    var AbstractNode = class {
      constructor() {
      }
    };
    exports.AbstractNode = AbstractNode;
    var Node = class extends AbstractNode {
      constructor() {
        super();
      }
      isVariation() {
        return false;
      }
      toString() {
        return `${this.id()}[${this.notation()}]`;
      }
    };
    exports.Node = Node;
    var Variation = class extends AbstractNode {
      constructor() {
        super();
      }
      isVariation() {
        return true;
      }
      toString() {
        return this.id();
      }
    };
    exports.Variation = Variation;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_game/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_game/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.trimAndCollapseSpaces = void 0;
    function trimAndCollapseSpaces(text) {
      return text.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    }
    exports.trimAndCollapseSpaces = trimAndCollapseSpaces;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_game/node_variation_impl.js
var require_node_variation_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_game/node_variation_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveTreeRoot = void 0;
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    var node_variation_1 = require_node_variation();
    var position_1 = require_position();
    var MoveTreeRoot = class {
      constructor() {
        this._position = new position_1.Position();
        this._fullMoveNumber = 1;
        this._mainVariationData = createVariationData(this, true);
      }
      clearTree() {
        this._mainVariationData = createVariationData(this, true);
      }
      mainVariation() {
        return new VariationImpl(this._mainVariationData, this._position);
      }
      findById(id) {
        const tokens = id.split("-");
        if (tokens.length % 2 !== 1) {
          return void 0;
        }
        const position = new position_1.Position(this._position);
        let variationData = this._mainVariationData;
        for (let i = 0; i + 1 < tokens.length; i += 2) {
          const nodeData = findNode(variationData, tokens[i], position);
          if (nodeData === void 0) {
            return void 0;
          }
          const match = /^v(\d+)$/.exec(tokens[i + 1]);
          if (!match) {
            return void 0;
          }
          const variationIndex = parseInt(match[1]);
          if (variationIndex >= nodeData.variations.length) {
            return void 0;
          }
          variationData = nodeData.variations[variationIndex];
        }
        const lastToken = tokens[tokens.length - 1];
        if (lastToken === "start") {
          return new VariationImpl(variationData, position);
        } else {
          const nodeData = findNode(variationData, lastToken, position);
          return nodeData === void 0 ? void 0 : new NodeImpl(nodeData, position);
        }
      }
    };
    exports.MoveTreeRoot = MoveTreeRoot;
    function findNode(variationData, nodeIdToken, position) {
      let nodeData = variationData.child;
      while (nodeData !== void 0) {
        if (nodeIdToken === nodeData.fullMoveNumber + nodeData.moveColor) {
          return nodeData;
        }
        applyMoveDescriptor(position, nodeData);
        nodeData = nodeData.child;
      }
      return void 0;
    }
    function createNodeData(parentVariation, moveColor, fullMoveNumber, moveDescriptor) {
      return {
        parentVariation,
        child: void 0,
        variations: [],
        moveColor,
        fullMoveNumber,
        moveDescriptor,
        nags: /* @__PURE__ */ new Set(),
        tags: /* @__PURE__ */ new Map(),
        comment: void 0,
        isLongComment: false
      };
    }
    function createVariationData(parent, longVariation) {
      return {
        parent,
        child: void 0,
        isLongVariation: longVariation,
        nags: /* @__PURE__ */ new Set(),
        tags: /* @__PURE__ */ new Map(),
        comment: void 0,
        isLongComment: false
      };
    }
    function computeMoveDescriptor(position, move) {
      if (move === "--") {
        if (!position.isNullMoveLegal()) {
          throw new exception_1.InvalidNotation(position.fen(), "--", i18n_1.i18n.ILLEGAL_NULL_MOVE);
        }
        return null;
      } else {
        return position.notation(move);
      }
    }
    function applyMoveDescriptor(position, nodeData) {
      if (nodeData.moveDescriptor === null) {
        position.playNullMove();
      } else {
        position.play(nodeData.moveDescriptor);
      }
    }
    function rebuildVariationPosition(variationData) {
      if (variationData.parent instanceof MoveTreeRoot) {
        return new position_1.Position(variationData.parent._position);
      } else {
        let current = variationData.parent.parentVariation.child;
        const position = rebuildVariationPosition(variationData.parent.parentVariation);
        while (current !== variationData.parent) {
          applyMoveDescriptor(position, current);
          current = current.child;
        }
        return position;
      }
    }
    function buildNodeId(nodeData) {
      return buildVariationIdPrefix(nodeData.parentVariation) + nodeData.fullMoveNumber + nodeData.moveColor;
    }
    function buildVariationIdPrefix(variationData) {
      if (variationData.parent instanceof MoveTreeRoot) {
        return "";
      } else {
        const parentNodeId = buildNodeId(variationData.parent);
        const variationIndex = variationData.parent.variations.indexOf(variationData);
        return `${parentNodeId}-v${variationIndex}-`;
      }
    }
    function isLongVariation(variationData) {
      while (true) {
        if (!variationData.isLongVariation) {
          return false;
        }
        if (variationData.parent instanceof MoveTreeRoot) {
          return true;
        }
        variationData = variationData.parent.parentVariation;
      }
    }
    function isValidVariationIndex(variationIndex, nodeData) {
      return Number.isInteger(variationIndex) && variationIndex >= 0 && variationIndex < nodeData.variations.length;
    }
    function isValidNag(nag) {
      return Number.isInteger(nag) && nag >= 0;
    }
    function isValidTagKey(tagKey) {
      return typeof tagKey === "string" && /^\w+$/.test(tagKey);
    }
    var NodeImpl = class extends node_variation_1.Node {
      constructor(data4, positionBefore) {
        super();
        this._data = data4;
        this._positionBefore = positionBefore;
      }
      id() {
        return buildNodeId(this._data);
      }
      nags() {
        const result = [];
        for (const nag of this._data.nags) {
          result.push(nag);
        }
        return result.sort((a, b) => a - b);
      }
      hasNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Node.hasNag()");
        }
        return this._data.nags.has(nag);
      }
      addNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Node.addNag()");
        }
        return this._data.nags.add(nag);
      }
      removeNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Node.removeNag()");
        }
        return this._data.nags.delete(nag);
      }
      tags() {
        const result = [];
        for (const tag of this._data.tags.keys()) {
          result.push(tag);
        }
        return result.sort();
      }
      tag(tagKey, value) {
        if (!isValidTagKey(tagKey)) {
          throw new exception_1.IllegalArgument("Node.tag()");
        }
        if (arguments.length === 1) {
          return this._data.tags.get(tagKey);
        } else if (arguments.length >= 2) {
          if (value === void 0 || value === null) {
            this._data.tags.delete(tagKey);
          } else {
            this._data.tags.set(tagKey, String(value));
          }
        } else {
          throw new exception_1.IllegalArgument("Node.tag()");
        }
      }
      comment(value, isLongComment) {
        if (arguments.length === 0) {
          return this._data.comment;
        } else if (value === void 0 || value === null) {
          this._data.comment = void 0;
          this._data.isLongComment = false;
        } else {
          this._data.comment = String(value);
          this._data.isLongComment = Boolean(isLongComment);
        }
      }
      isLongComment() {
        return this._data.isLongComment && isLongVariation(this._data.parentVariation);
      }
      parentVariation() {
        const initialPosition = rebuildVariationPosition(this._data.parentVariation);
        return new VariationImpl(this._data.parentVariation, initialPosition);
      }
      previous() {
        let current = this._data.parentVariation.child;
        if (current === this._data) {
          return void 0;
        }
        const position = rebuildVariationPosition(this._data.parentVariation);
        while (current.child !== this._data) {
          applyMoveDescriptor(position, current);
          current = current.child;
        }
        return new NodeImpl(current, position);
      }
      next() {
        if (this._data.child === void 0) {
          return void 0;
        }
        const nextPositionBefore = new position_1.Position(this._positionBefore);
        applyMoveDescriptor(nextPositionBefore, this._data);
        return new NodeImpl(this._data.child, nextPositionBefore);
      }
      notation() {
        return this._data.moveDescriptor === null ? "--" : this._positionBefore.notation(this._data.moveDescriptor);
      }
      figurineNotation() {
        return this._data.moveDescriptor === null ? "--" : this._positionBefore.figurineNotation(this._data.moveDescriptor);
      }
      positionBefore() {
        return new position_1.Position(this._positionBefore);
      }
      position() {
        const position = new position_1.Position(this._positionBefore);
        applyMoveDescriptor(position, this._data);
        return position;
      }
      fullMoveNumber() {
        return this._data.fullMoveNumber;
      }
      moveColor() {
        return this._data.moveColor;
      }
      variations() {
        return this._data.variations.map((variation) => new VariationImpl(variation, this._positionBefore));
      }
      play(move) {
        const nextPositionBefore = new position_1.Position(this._positionBefore);
        applyMoveDescriptor(nextPositionBefore, this._data);
        const nextMoveColor = nextPositionBefore.turn();
        const nextFullMoveNumber = nextMoveColor === "w" ? this._data.fullMoveNumber + 1 : this._data.fullMoveNumber;
        this._data.child = createNodeData(this._data.parentVariation, nextMoveColor, nextFullMoveNumber, computeMoveDescriptor(nextPositionBefore, move));
        return new NodeImpl(this._data.child, nextPositionBefore);
      }
      removeFollowingMoves() {
        this._data.child = void 0;
      }
      addVariation(longVariation) {
        const result = createVariationData(this._data, longVariation === void 0 ? false : longVariation);
        this._data.variations.push(result);
        return new VariationImpl(result, this._positionBefore);
      }
      removeVariation(variationIndex) {
        if (!isValidVariationIndex(variationIndex, this._data)) {
          throw new exception_1.IllegalArgument("Node.removeVariation()");
        }
        this._data.variations = this._data.variations.slice(0, variationIndex).concat(this._data.variations.slice(variationIndex + 1));
      }
      swapVariations(variationIndex1, variationIndex2) {
        if (!isValidVariationIndex(variationIndex1, this._data) || !isValidVariationIndex(variationIndex2, this._data)) {
          throw new exception_1.IllegalArgument("Node.swapVariations()");
        }
        const variationTmp = this._data.variations[variationIndex1];
        this._data.variations[variationIndex1] = this._data.variations[variationIndex2];
        this._data.variations[variationIndex2] = variationTmp;
      }
      promoteVariation(variationIndex) {
        if (!isValidVariationIndex(variationIndex, this._data) || this._data.variations[variationIndex].child === void 0) {
          throw new exception_1.IllegalArgument("Node.promoteVariation()");
        }
        const oldMainLine = this._data;
        const newMainLine = this._data.variations[variationIndex].child;
        const variations = oldMainLine.variations;
        oldMainLine.variations = [];
        variations[variationIndex] = createVariationData(newMainLine, false);
        variations[variationIndex].child = oldMainLine;
        this._data = newMainLine;
        newMainLine.variations = variations.concat(newMainLine.variations);
        findParent(oldMainLine).child = newMainLine;
        resetParentVariationRecursively(newMainLine, oldMainLine.parentVariation);
        resetParentVariationRecursively(oldMainLine, variations[variationIndex]);
        for (const variation of newMainLine.variations) {
          variation.parent = newMainLine;
        }
      }
    };
    function findParent(oldMainLine) {
      let candidate = oldMainLine.parentVariation;
      while (candidate.child !== oldMainLine) {
        candidate = candidate.child;
      }
      return candidate;
    }
    function resetParentVariationRecursively(root, newParentVariation) {
      let current = root;
      while (current !== void 0) {
        current.parentVariation = newParentVariation;
        current = current.child;
      }
    }
    var VariationImpl = class extends node_variation_1.Variation {
      constructor(data4, initialPosition) {
        super();
        this._data = data4;
        this._initialPosition = initialPosition;
      }
      id() {
        return buildVariationIdPrefix(this._data) + "start";
      }
      nags() {
        const result = [];
        for (const nag of this._data.nags) {
          result.push(nag);
        }
        return result.sort((a, b) => a - b);
      }
      hasNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Variation.hasNag()");
        }
        return this._data.nags.has(nag);
      }
      addNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Variation.addNag()");
        }
        return this._data.nags.add(nag);
      }
      removeNag(nag) {
        if (!isValidNag(nag)) {
          throw new exception_1.IllegalArgument("Variation.removeNag()");
        }
        return this._data.nags.delete(nag);
      }
      tags() {
        const result = [];
        for (const tag of this._data.tags.keys()) {
          result.push(tag);
        }
        return result.sort();
      }
      tag(tagKey, value) {
        if (!isValidTagKey(tagKey)) {
          throw new exception_1.IllegalArgument("Variation.tag()");
        }
        if (arguments.length === 1) {
          return this._data.tags.get(tagKey);
        } else if (arguments.length >= 2) {
          if (value === void 0 || value === null) {
            this._data.tags.delete(tagKey);
          } else {
            this._data.tags.set(tagKey, String(value));
          }
        } else {
          throw new exception_1.IllegalArgument("Variation.tag()");
        }
      }
      comment(value, isLongComment) {
        if (arguments.length === 0) {
          return this._data.comment;
        } else if (value === void 0 || value === null) {
          this._data.comment = void 0;
          this._data.isLongComment = false;
        } else {
          this._data.comment = String(value);
          this._data.isLongComment = Boolean(isLongComment);
        }
      }
      isLongComment() {
        return this._data.isLongComment && isLongVariation(this._data);
      }
      parentNode() {
        return this._data.parent instanceof MoveTreeRoot ? void 0 : new NodeImpl(this._data.parent, this._initialPosition);
      }
      first() {
        return this._data.child === void 0 ? void 0 : new NodeImpl(this._data.child, this._initialPosition);
      }
      nodes() {
        const result = [];
        let currentNodeData = this._data.child;
        let previousNodeData = void 0;
        let previousPositionBefore = this._initialPosition;
        while (currentNodeData !== void 0) {
          previousPositionBefore = new position_1.Position(previousPositionBefore);
          if (previousNodeData !== void 0) {
            applyMoveDescriptor(previousPositionBefore, previousNodeData);
          }
          result.push(new NodeImpl(currentNodeData, previousPositionBefore));
          previousNodeData = currentNodeData;
          currentNodeData = currentNodeData.child;
        }
        return result;
      }
      isLongVariation() {
        return isLongVariation(this._data);
      }
      initialPosition() {
        return new position_1.Position(this._initialPosition);
      }
      initialFullMoveNumber() {
        return this._data.parent instanceof MoveTreeRoot ? this._data.parent._fullMoveNumber : this._data.parent.fullMoveNumber;
      }
      play(move) {
        const moveColor = this._initialPosition.turn();
        const fullMoveNumber = this.initialFullMoveNumber();
        this._data.child = createNodeData(this._data, moveColor, fullMoveNumber, computeMoveDescriptor(this._initialPosition, move));
        return new NodeImpl(this._data.child, this._initialPosition);
      }
      clearMoves() {
        this._data.child = void 0;
      }
    };
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/game.js
var require_game = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/game.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var date_value_1 = require_date_value();
    var exception_1 = require_exception();
    var helper_1 = require_helper();
    var position_1 = require_position();
    var common_1 = require_common();
    var node_variation_impl_1 = require_node_variation_impl();
    var base_types_impl_1 = require_base_types_impl();
    var Game3 = class {
      constructor() {
        this._playerName = [void 0, void 0];
        this._playerElo = [void 0, void 0];
        this._playerTitle = [void 0, void 0];
        this._result = 3;
        this._moveTreeRoot = new node_variation_impl_1.MoveTreeRoot();
      }
      playerName(color, value) {
        const colorCode = (0, base_types_impl_1.colorFromString)(color);
        if (colorCode < 0) {
          throw new exception_1.IllegalArgument("Game.playerName()");
        }
        if (arguments.length === 1) {
          return this._playerName[colorCode];
        } else {
          this._playerName[colorCode] = sanitizeStringHeader(value);
        }
      }
      playerElo(color, value) {
        const colorCode = (0, base_types_impl_1.colorFromString)(color);
        if (colorCode < 0) {
          throw new exception_1.IllegalArgument("Game.playerElo()");
        }
        if (arguments.length === 1) {
          return this._playerElo[colorCode];
        } else {
          value = sanitizeNumberHeader(value);
          if (value === void 0 || Number.isInteger(value) && value >= 0) {
            this._playerElo[colorCode] = value;
          } else {
            throw new exception_1.IllegalArgument("Game.playerElo()");
          }
        }
      }
      playerTitle(color, value) {
        const colorCode = (0, base_types_impl_1.colorFromString)(color);
        if (colorCode < 0) {
          throw new exception_1.IllegalArgument("Game.playerTitle()");
        }
        if (arguments.length === 1) {
          return this._playerTitle[colorCode];
        } else {
          this._playerTitle[colorCode] = sanitizeStringHeader(value);
        }
      }
      event(value) {
        if (arguments.length === 0) {
          return this._event;
        } else {
          this._event = sanitizeStringHeader(value);
        }
      }
      round(value) {
        if (arguments.length === 0) {
          return this._round;
        } else {
          this._round = sanitizeStringHeader(value);
        }
      }
      date(valueOrYear, month, day) {
        switch (arguments.length) {
          case 0:
            return this._date;
          case 1:
            if (valueOrYear === void 0 || valueOrYear === null) {
              this._date = void 0;
            } else if (valueOrYear instanceof date_value_1.DateValue) {
              this._date = valueOrYear;
            } else if (valueOrYear instanceof Date) {
              this._date = new date_value_1.DateValue(valueOrYear);
            } else if (date_value_1.DateValue.isValid(valueOrYear)) {
              this._date = new date_value_1.DateValue(valueOrYear);
            } else {
              throw new exception_1.IllegalArgument("Game.date()");
            }
            break;
          default:
            if (date_value_1.DateValue.isValid(valueOrYear, month, day)) {
              this._date = new date_value_1.DateValue(valueOrYear, month, day);
            } else {
              throw new exception_1.IllegalArgument("Game.date()");
            }
            break;
        }
      }
      dateAsDate() {
        return this._date === void 0 ? void 0 : this._date.toDate();
      }
      dateAsString(locales) {
        return this._date === void 0 ? void 0 : this._date.toHumanReadableString(locales);
      }
      site(value) {
        if (arguments.length === 0) {
          return this._site;
        } else {
          this._site = sanitizeStringHeader(value);
        }
      }
      annotator(value) {
        if (arguments.length === 0) {
          return this._annotator;
        } else {
          this._annotator = sanitizeStringHeader(value);
        }
      }
      result(value) {
        if (arguments.length === 0) {
          return (0, base_types_impl_1.resultToString)(this._result);
        } else {
          const resultCode = (0, base_types_impl_1.resultFromString)(value);
          if (resultCode < 0) {
            throw new exception_1.IllegalArgument("Game.result()");
          }
          this._result = resultCode;
        }
      }
      variant() {
        return this._moveTreeRoot._position.variant();
      }
      initialPosition(initialPosition, fullMoveNumber) {
        if (arguments.length === 0) {
          return new position_1.Position(this._moveTreeRoot._position);
        } else {
          if (!(initialPosition instanceof position_1.Position)) {
            throw new exception_1.IllegalArgument("Game.initialPosition()");
          }
          if (arguments.length >= 2) {
            if (!Number.isInteger(fullMoveNumber)) {
              throw new exception_1.IllegalArgument("Game.initialPosition()");
            }
            this._moveTreeRoot._fullMoveNumber = fullMoveNumber;
          } else {
            this._moveTreeRoot._fullMoveNumber = 1;
          }
          this._moveTreeRoot._position = new position_1.Position(initialPosition);
          this._moveTreeRoot.clearTree();
        }
      }
      mainVariation() {
        return this._moveTreeRoot.mainVariation();
      }
      nodes(withSubVariations = false) {
        if (!withSubVariations) {
          return this.mainVariation().nodes();
        }
        const result = [];
        function processVariation(variation) {
          for (const currentNode of variation.nodes()) {
            for (const nextVariation of currentNode.variations()) {
              processVariation(nextVariation);
            }
            result.push(currentNode);
          }
        }
        processVariation(this.mainVariation());
        return result;
      }
      findById(id) {
        return this._moveTreeRoot.findById(id);
      }
      ascii() {
        const lines = [];
        function pushIfDefined(header) {
          if (header !== void 0) {
            lines.push(header);
          }
        }
        pushIfDefined(formatEventAndRound(this._event, this._round));
        pushIfDefined(formatSimpleHeader("Site", this._site));
        pushIfDefined(formatDate(this.dateAsString("en-us")));
        pushIfDefined(formatPlayer("White", this._playerName[0], this._playerElo[0], this._playerTitle[0]));
        pushIfDefined(formatPlayer("Black", this._playerName[1], this._playerElo[1], this._playerTitle[1]));
        pushIfDefined(formatSimpleHeader("Annotator", this._annotator));
        const variant = this._moveTreeRoot._position.variant();
        if (variant !== "regular") {
          lines.push("Variant: " + variant);
        }
        if (!(0, helper_1.variantWithCanonicalStartPosition)(variant) || !position_1.Position.isEqual(this._moveTreeRoot._position, new position_1.Position(variant))) {
          lines.push(this._moveTreeRoot._position.ascii());
        }
        function isNonEmptyVariation(variation) {
          return variation.first() !== void 0 || variation.nags().length > 0 || variation.tags().length > 0 || variation.comment() !== void 0;
        }
        function dumpNode(node, indent, hasSomethingAfter) {
          const move = indent + node.fullMoveNumber() + (node.moveColor() === "w" ? "." : "...") + node.notation();
          const moveAnnotations = formatAnnotations(node);
          lines.push(moveAnnotations.length === 0 ? move : move + " " + moveAnnotations.join(" "));
          let atLeastOneNonEmptyVariation = false;
          for (const variation of node.variations()) {
            if (isNonEmptyVariation(variation)) {
              lines.push(indent + " |");
              dumpVariation(variation, indent + (hasSomethingAfter ? " |  " : "    "), indent + " +- ", false);
              atLeastOneNonEmptyVariation = true;
            }
          }
          return atLeastOneNonEmptyVariation;
        }
        function dumpVariation(variation, indent, indentFirst, hasSomethingAfter) {
          const variationAnnotations = formatAnnotations(variation);
          if (variationAnnotations.length > 0) {
            lines.push(indentFirst + variationAnnotations.join(" "));
          }
          let node = variation.first();
          let atLeastOneVariationInPreviousNode = false;
          let isFirstNode = true;
          while (node !== void 0) {
            if (atLeastOneVariationInPreviousNode) {
              lines.push(indent + " |");
            }
            const nextNode = node.next();
            atLeastOneVariationInPreviousNode = dumpNode(node, isFirstNode && variationAnnotations.length === 0 ? indentFirst : indent, hasSomethingAfter || nextNode !== void 0);
            isFirstNode = false;
            node = nextNode;
          }
        }
        dumpVariation(this._moveTreeRoot.mainVariation(), "", "", false);
        lines.push((0, base_types_impl_1.resultToString)(this._result));
        return lines.join("\n");
      }
    };
    exports.Game = Game3;
    function sanitizeStringHeader(value) {
      return value === void 0 || value === null ? void 0 : String(value);
    }
    function sanitizeNumberHeader(value) {
      return value === void 0 || value === null ? void 0 : Number(value);
    }
    function trimCollapseAndMarkEmpty(text) {
      text = (0, common_1.trimAndCollapseSpaces)(text);
      return text === "" ? "<empty>" : text;
    }
    function formatSimpleHeader(key, header) {
      return header === void 0 ? void 0 : `${key}: ${trimCollapseAndMarkEmpty(header)}`;
    }
    function formatEventAndRound(event, round) {
      if (event === void 0 && round === void 0) {
        return void 0;
      }
      let result = event === void 0 ? "Event: <undefined>" : `Event: ${trimCollapseAndMarkEmpty(event)}`;
      if (round !== void 0) {
        result += ` (${trimCollapseAndMarkEmpty(round)})`;
      }
      return result;
    }
    function formatDate(dateAsString) {
      return dateAsString === void 0 ? void 0 : "Date: " + dateAsString;
    }
    function formatPlayer(key, playerName2, playerElo, playerTitle) {
      if (playerName2 === void 0 && playerElo === void 0 && playerTitle === void 0) {
        return void 0;
      }
      let result = playerName2 === void 0 ? `${key}: <undefined>` : `${key}: ${trimCollapseAndMarkEmpty(playerName2)}`;
      if (playerElo !== void 0 && playerTitle !== void 0) {
        result += ` (${trimCollapseAndMarkEmpty(playerTitle)} ${playerElo})`;
      } else if (playerElo !== void 0) {
        result += ` (${playerElo})`;
      } else if (playerTitle !== void 0) {
        result += ` (${trimCollapseAndMarkEmpty(playerTitle)})`;
      }
      return result;
    }
    function formatAnnotations(node) {
      const result = [];
      for (const nag of node.nags()) {
        result.push((0, helper_1.nagSymbol)(nag));
      }
      for (const tagKey of node.tags()) {
        result.push(`${tagKey}={${(0, common_1.trimAndCollapseSpaces)(node.tag(tagKey))}}`);
      }
      const comment = node.comment();
      if (comment !== void 0) {
        result.push(trimCollapseAndMarkEmpty(comment));
      }
      return result;
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/database.js
var require_database = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/database.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Database = exports.isValidGameIndex = void 0;
    var exception_1 = require_exception();
    function isValidGameIndex(gameIndex) {
      return Number.isInteger(gameIndex) && gameIndex >= 0;
    }
    exports.isValidGameIndex = isValidGameIndex;
    var Database = class {
      constructor() {
      }
      gameCount() {
        return this.doGameCount();
      }
      game(gameIndex) {
        if (!isValidGameIndex(gameIndex)) {
          throw new exception_1.IllegalArgument("Database.game()");
        }
        return this.doGame(gameIndex);
      }
    };
    exports.Database = Database;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/token_stream.js
var require_token_stream = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/token_stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenStream = void 0;
    var exception_1 = require_exception();
    var i18n_1 = require_i18n();
    var common_1 = require_common();
    function regExpWrapper(re, needIncrementLineIndex) {
      const result = re;
      result.needIncrementLineIndex = needIncrementLineIndex !== void 0 && needIncrementLineIndex;
      result.matchedIndex = -1;
      result.matched = null;
      return result;
    }
    var FIRST_MOVE_TEXT_TOKEN = 5;
    var LAST_MOVE_TEXT_TOKEN = 11;
    var SPECIAL_NAGS_LOOKUP = /* @__PURE__ */ new Map();
    SPECIAL_NAGS_LOOKUP.set("!!", 3);
    SPECIAL_NAGS_LOOKUP.set("!", 1);
    SPECIAL_NAGS_LOOKUP.set("!?", 5);
    SPECIAL_NAGS_LOOKUP.set("?!", 6);
    SPECIAL_NAGS_LOOKUP.set("?", 2);
    SPECIAL_NAGS_LOOKUP.set("??", 4);
    SPECIAL_NAGS_LOOKUP.set("+-", 18);
    SPECIAL_NAGS_LOOKUP.set("+/-", 16);
    SPECIAL_NAGS_LOOKUP.set("+/=", 14);
    SPECIAL_NAGS_LOOKUP.set("+=", 14);
    SPECIAL_NAGS_LOOKUP.set("=", 10);
    SPECIAL_NAGS_LOOKUP.set("~", 13);
    SPECIAL_NAGS_LOOKUP.set("inf", 13);
    SPECIAL_NAGS_LOOKUP.set("=/+", 15);
    SPECIAL_NAGS_LOOKUP.set("=+", 15);
    SPECIAL_NAGS_LOOKUP.set("-/+", 17);
    SPECIAL_NAGS_LOOKUP.set("-+", 19);
    SPECIAL_NAGS_LOOKUP.set("RR", 145);
    SPECIAL_NAGS_LOOKUP.set("N", 146);
    var TokenStream = class {
      constructor(text, initialLocation) {
        this._pos = 0;
        this._lineIndex = 1;
        this._token = 0;
        this._tokenValue = null;
        this._tokenCharacterIndex = -1;
        this._tokenLineIndex = -1;
        this._emptyLineBeforeToken = false;
        this._emptyLineAfterToken = false;
        this._matchSpaces = regExpWrapper(/[ \f\t\v]+/g);
        this._matchLineBreak = regExpWrapper(/\r?\n|\r/g, true);
        this._matchFastAdvance = regExpWrapper(/[^ \f\t\v\r\n"{][^ \f\t\v\r\n"{10*]*/g);
        this._matchBeginHeader = regExpWrapper(/\[/g);
        this._matchEndHeader = regExpWrapper(/\]/g);
        this._matchHeaderId = regExpWrapper(/(\w+)/g);
        this._matchEnterHeaderValue = regExpWrapper(/"/g);
        this._matchMoveNumber = regExpWrapper(/[0-9]+\.(?:\.\.)?/g);
        this._matchMove = regExpWrapper(/(?:O-O(?:-O)?|0-0(?:-0)?|[KQRBN][a-h]?[1-8]?x?[a-h][1-8]|(?:[a-h]x?)?[a-h][1-8](?:=?[KQRBNP])?)[+#]?|--/g);
        this._matchNag = regExpWrapper(/([!?][!?]?|\+\/?[-=]|[-=]\/?\+|=|inf|~|RR|N)|\$([1-9][0-9]*)/g);
        this._matchEnterComment = regExpWrapper(/\{/g);
        this._matchBeginVariation = regExpWrapper(/\(/g);
        this._matchEndVariation = regExpWrapper(/\)/g);
        this._matchEndOfGame = regExpWrapper(/1-0|0-1|1\/2-1\/2|\*/g);
        this._headerValueMode = regExpWrapper(/((?:[^\\"\f\t\v\r\n]|\\[^\f\t\v\r\n])*)"/g);
        this._headerValueDegradedMode = regExpWrapper(/[^\r\n]*/g);
        this._commentMode = regExpWrapper(/((?:[^\\}]|\\(?:.|[\r\n]))*)\}/g, true);
        if (text.codePointAt(0) === 65279) {
          text = text.substring(1);
        }
        this._text = text;
        if (initialLocation !== void 0) {
          this._pos = initialLocation.pos;
          this._lineIndex = initialLocation.lineIndex;
        }
      }
      text() {
        return this._text;
      }
      currentLocation() {
        return { pos: this._pos, lineIndex: this._lineIndex };
      }
      emptyLineBeforeToken() {
        return this._emptyLineBeforeToken;
      }
      emptyLineAfterToken() {
        return this._emptyLineAfterToken;
      }
      token() {
        return this._token;
      }
      tokenValue() {
        return this._tokenValue;
      }
      tokenCharacterIndex() {
        return this._tokenCharacterIndex;
      }
      tokenLineIndex() {
        return this._tokenLineIndex;
      }
      isMoveTextSection() {
        return this._token >= FIRST_MOVE_TEXT_TOKEN && this._token <= LAST_MOVE_TEXT_TOKEN;
      }
      consumeToken() {
        this._emptyLineBeforeToken = this._token === 0 || this._token === 11 ? this.skipBlanks() : this._emptyLineAfterToken;
        if (this._pos >= this._text.length) {
          this._tokenCharacterIndex = this._text.length;
          this._tokenLineIndex = this._lineIndex;
          return false;
        }
        this._tokenCharacterIndex = this._pos;
        this._tokenLineIndex = this._lineIndex;
        if (this.testAtPos(this._matchMoveNumber)) {
          this._token = 5;
          this._tokenValue = null;
        } else if (this.testAtPos(this._matchMove)) {
          this._token = 6;
          this._tokenValue = this._matchMove.matched[0];
        } else if (this.testAtPos(this._matchNag)) {
          this._token = 7;
          this._tokenValue = this._matchNag.matched[2] === void 0 ? SPECIAL_NAGS_LOOKUP.get(this._matchNag.matched[1]) : parseInt(this._matchNag.matched[2], 10);
        } else if (this.testAtPos(this._matchEnterComment)) {
          if (!this.testAtPos(this._commentMode)) {
            throw new exception_1.InvalidPGN(this._text, this._pos, this._lineIndex, i18n_1.i18n.INVALID_PGN_TOKEN);
          }
          this._token = 8;
          this._tokenValue = parseCommentValue(this._commentMode.matched[1]);
        } else if (this.testAtPos(this._matchBeginVariation)) {
          this._token = 9;
          this._tokenValue = null;
        } else if (this.testAtPos(this._matchEndVariation)) {
          this._token = 10;
          this._tokenValue = null;
        } else if (this.testAtPos(this._matchEndOfGame)) {
          this._token = 11;
          this._tokenValue = this._matchEndOfGame.matched[0];
        } else if (this.testAtPos(this._matchBeginHeader)) {
          this._token = 1;
          this._tokenValue = null;
        } else if (this.testAtPos(this._matchEndHeader)) {
          this._token = 2;
          this._tokenValue = null;
        } else if (this.testAtPos(this._matchHeaderId)) {
          this._token = 3;
          this._tokenValue = this._matchHeaderId.matched[1];
        } else if (this.testAtPos(this._matchEnterHeaderValue)) {
          if (!this.testAtPos(this._headerValueMode)) {
            throw new exception_1.InvalidPGN(this._text, this._pos, this._lineIndex, i18n_1.i18n.INVALID_PGN_TOKEN);
          }
          this._token = 4;
          this._tokenValue = parseHeaderValue(this._headerValueMode.matched[1]);
        } else {
          throw new exception_1.InvalidPGN(this._text, this._pos, this._lineIndex, i18n_1.i18n.INVALID_PGN_TOKEN);
        }
        this._emptyLineAfterToken = this._token === 11 ? false : this.skipBlanks();
        return true;
      }
      skipGame() {
        let atLeastOneTokenFound = false;
        this._token = 0;
        while (true) {
          this.skipBlanks();
          if (this._pos >= this._text.length) {
            return atLeastOneTokenFound;
          }
          atLeastOneTokenFound = true;
          if (this.testAtPos(this._matchEnterComment)) {
            if (!this.testAtPos(this._commentMode)) {
              this._pos = this._text.length;
              return true;
            }
          } else if (this.testAtPos(this._matchEnterHeaderValue)) {
            if (!this.testAtPos(this._headerValueMode)) {
              this.testAtPos(this._headerValueDegradedMode);
            }
          } else if (this.testAtPos(this._matchEndOfGame)) {
            return true;
          } else {
            this.testAtPos(this._matchFastAdvance);
          }
        }
      }
      skipBlanks() {
        let newLineCount = 0;
        while (this._pos < this._text.length) {
          if (this.testAtPos(this._matchSpaces)) {
          } else if (this.testAtPos(this._matchLineBreak)) {
            ++newLineCount;
          } else {
            break;
          }
        }
        return newLineCount >= 2;
      }
      testAtPos(re) {
        if (re.matchedIndex < this._pos) {
          re.lastIndex = this._pos;
          re.matched = re.exec(this._text);
          re.matchedIndex = re.matched === null ? this._text.length : re.matched.index;
        }
        if (re.matchedIndex === this._pos) {
          this._pos = re.lastIndex;
          if (re.needIncrementLineIndex) {
            const reLineBreak = /\r?\n|\r/g;
            while (reLineBreak.exec(re.matched[0])) {
              ++this._lineIndex;
            }
          }
          return true;
        } else {
          return false;
        }
      }
    };
    exports.TokenStream = TokenStream;
    function parseHeaderValue(rawHeaderValue) {
      return (0, common_1.trimAndCollapseSpaces)(rawHeaderValue.replace(/\\([\\"])/g, "$1"));
    }
    function parseCommentValue(rawComment) {
      rawComment = rawComment.replace(/\\([\\}])/g, "$1");
      const tags = /* @__PURE__ */ new Map();
      let comment = rawComment.replace(/\[%(\w+)\s([^[\]]*)\]/g, (_, p1, p2) => {
        p2 = (0, common_1.trimAndCollapseSpaces)(p2);
        if (p2 !== "") {
          tags.set(p1, p2);
        }
        return " ";
      });
      comment = (0, common_1.trimAndCollapseSpaces)(comment);
      if (comment === "") {
        comment = void 0;
      }
      return { comment, tags };
    }
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/pgn_read_impl.js
var require_pgn_read_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/pgn_read_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readOneGame = exports.readDatabase = void 0;
    var database_1 = require_database();
    var date_value_1 = require_date_value();
    var exception_1 = require_exception();
    var game_1 = require_game();
    var helper_1 = require_helper();
    var i18n_1 = require_i18n();
    var node_variation_1 = require_node_variation();
    var position_1 = require_position();
    var token_stream_1 = require_token_stream();
    function parseNullableHeader(value) {
      return value === "?" ? void 0 : value;
    }
    function parsePositiveIntegerHeader(value) {
      if (/^\d+$/.test(value)) {
        const result = Number(value);
        if (Number.isInteger(result)) {
          return result;
        }
      }
      return void 0;
    }
    function parseDateHeader(value) {
      if (/^([0-9]{4})\.([0-9]{2})\.([0-9]{2})$/.test(value)) {
        const y = RegExp.$1;
        const m = RegExp.$2;
        const d = RegExp.$3;
        const year = parseInt(y, 10);
        const month = parseInt(m, 10);
        const day = parseInt(d, 10);
        return date_value_1.DateValue.isValid(year, month, day) ? new date_value_1.DateValue(year, month, day) : date_value_1.DateValue.isValid(year, month) ? new date_value_1.DateValue(year, month) : date_value_1.DateValue.isValid(year) ? new date_value_1.DateValue(year) : void 0;
      } else if (/^([0-9]{4})\.([0-9]{2})\.\?\?$/.test(value)) {
        const y = RegExp.$1;
        const m = RegExp.$2;
        const year = parseInt(y, 10);
        const month = parseInt(m, 10);
        return date_value_1.DateValue.isValid(year, month) ? new date_value_1.DateValue(year, month) : date_value_1.DateValue.isValid(year) ? new date_value_1.DateValue(year) : void 0;
      } else if (/^([0-9]{4})(?:\.\?\?\.\?\?)?$/.test(value)) {
        const year = parseInt(RegExp.$1, 10);
        return date_value_1.DateValue.isValid(year) ? new date_value_1.DateValue(year) : void 0;
      } else {
        return void 0;
      }
    }
    function parseVariant(value) {
      value = value.toLowerCase();
      if (value === "regular" || value === "standard") {
        return "regular";
      } else if (value === "fischerandom" || /^chess[ -]?960$/.test(value)) {
        return "chess960";
      } else if (/^no[ -]king$/.test(value)) {
        return "no-king";
      } else if (/^white[ -]king[ -]only$/.test(value)) {
        return "white-king-only";
      } else if (/^black[ -]king[ -]only$/.test(value)) {
        return "black-king-only";
      } else if (/^anti[ -]?chess/.test(value)) {
        return "antichess";
      } else if (value === "horde") {
        return "horde";
      } else {
        return void 0;
      }
    }
    function processHeader(stream, game, factory, key, value, valueCharacterIndex, valueLineIndex) {
      value = value.trim();
      switch (key) {
        case "White":
          game.playerName("w", parseNullableHeader(value));
          break;
        case "Black":
          game.playerName("b", parseNullableHeader(value));
          break;
        case "WhiteElo":
          game.playerElo("w", parsePositiveIntegerHeader(value));
          break;
        case "BlackElo":
          game.playerElo("b", parsePositiveIntegerHeader(value));
          break;
        case "WhiteTitle":
          game.playerTitle("w", value);
          break;
        case "BlackTitle":
          game.playerTitle("b", value);
          break;
        case "Event":
          game.event(parseNullableHeader(value));
          break;
        case "Round":
          game.round(parseNullableHeader(value));
          break;
        case "Date":
          game.date(parseDateHeader(value));
          break;
        case "Site":
          game.site(parseNullableHeader(value));
          break;
        case "Annotator":
          game.annotator(value);
          break;
        case "FEN":
          factory.fen = value;
          factory.fenTokenCharacterIndex = valueCharacterIndex;
          factory.fenTokenLineIndex = valueLineIndex;
          break;
        case "Variant":
          factory.variant = parseVariant(value);
          if (factory.variant === void 0) {
            throw new exception_1.InvalidPGN(stream.text(), valueCharacterIndex, valueLineIndex, i18n_1.i18n.UNKNOWN_VARIANT, value);
          }
          factory.variantTokenCharacterIndex = valueCharacterIndex;
          factory.variantTokenLineIndex = valueLineIndex;
          break;
      }
    }
    function initializeInitialPosition(stream, game, factory) {
      if (factory.fen !== void 0) {
        try {
          const position = factory.variant === void 0 ? new position_1.Position() : new position_1.Position(factory.variant, "empty");
          const moveCounters = position.fen(factory.fen);
          game.initialPosition(position, moveCounters.fullMoveNumber);
        } catch (error) {
          if (error instanceof exception_1.InvalidFEN) {
            throw new exception_1.InvalidPGN(stream.text(), factory.fenTokenCharacterIndex, factory.fenTokenLineIndex, i18n_1.i18n.INVALID_FEN_IN_PGN_TEXT, error.message);
          } else {
            throw error;
          }
        }
      } else if (factory.variant !== void 0) {
        if ((0, helper_1.variantWithCanonicalStartPosition)(factory.variant)) {
          const position = new position_1.Position(factory.variant, "start");
          game.initialPosition(position, 1);
        } else {
          throw new exception_1.InvalidPGN(stream.text(), factory.variantTokenCharacterIndex, factory.variantTokenLineIndex, i18n_1.i18n.VARIANT_WITHOUT_FEN, factory.variant);
        }
      }
    }
    function doParseGame(stream) {
      let game = null;
      let node = null;
      const nodeStack = [];
      const initialPositionFactory = {};
      while (stream.consumeToken()) {
        if (game === null) {
          game = new game_1.Game();
        }
        if (stream.isMoveTextSection() && node === null) {
          initializeInitialPosition(stream, game, initialPositionFactory);
          node = game.mainVariation();
        }
        switch (stream.token()) {
          case 1: {
            if (node !== null) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.UNEXPECTED_PGN_HEADER);
            }
            if (!stream.consumeToken() || stream.token() !== 3) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.MISSING_PGN_HEADER_ID);
            }
            const headerId = stream.tokenValue();
            if (!stream.consumeToken() || stream.token() !== 4) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.MISSING_PGN_HEADER_VALUE);
            }
            const headerValue = stream.tokenValue();
            const headerValueCharacterIndex = stream.tokenCharacterIndex();
            const headerValueLineIndex = stream.tokenLineIndex();
            if (!stream.consumeToken() || stream.token() !== 2) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.MISSING_END_OF_PGN_HEADER);
            }
            processHeader(stream, game, initialPositionFactory, headerId, headerValue, headerValueCharacterIndex, headerValueLineIndex);
            break;
          }
          case 5:
            break;
          case 6:
            try {
              node = node.play(stream.tokenValue());
            } catch (error) {
              if (error instanceof exception_1.InvalidNotation) {
                throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.INVALID_MOVE_IN_PGN_TEXT, error.notation, error.message);
              } else {
                throw error;
              }
            }
            break;
          case 7:
            node.addNag(stream.tokenValue());
            break;
          case 8: {
            const tokenValue = stream.tokenValue();
            for (const [key, value] of tokenValue.tags) {
              node.tag(key, value);
            }
            if (tokenValue.comment !== void 0) {
              const isLongComment = node instanceof node_variation_1.Variation ? stream.emptyLineAfterToken() : stream.emptyLineBeforeToken();
              node.comment(tokenValue.comment, isLongComment);
            }
            break;
          }
          case 9:
            if (node instanceof node_variation_1.Variation) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.UNEXPECTED_BEGIN_OF_VARIATION);
            }
            nodeStack.push(node);
            node = node.addVariation(stream.emptyLineBeforeToken());
            break;
          case 10:
            if (nodeStack.length === 0) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.UNEXPECTED_END_OF_VARIATION);
            }
            node = nodeStack.pop();
            break;
          case 11:
            if (nodeStack.length !== 0) {
              throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.UNEXPECTED_END_OF_GAME);
            }
            game.result(stream.tokenValue());
            return game;
          default:
            throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.INVALID_PGN_TOKEN);
        }
      }
      throw new exception_1.InvalidPGN(stream.text(), stream.tokenCharacterIndex(), stream.tokenLineIndex(), i18n_1.i18n.UNEXPECTED_END_OF_TEXT);
    }
    var PGNDatabaseImpl = class extends database_1.Database {
      constructor(pgnString) {
        super();
        this._currentGameIndex = -1;
        this._text = pgnString;
        this._gameLocations = [];
        this._stream = new token_stream_1.TokenStream(pgnString);
        while (true) {
          const currentLocation = this._stream.currentLocation();
          if (!this._stream.skipGame()) {
            break;
          }
          this._gameLocations.push(currentLocation);
        }
      }
      doGameCount() {
        return this._gameLocations.length;
      }
      doGame(gameIndex) {
        if (gameIndex >= this._gameLocations.length) {
          throw new exception_1.InvalidPGN(this._text, -1, -1, i18n_1.i18n.INVALID_GAME_INDEX, gameIndex, this._gameLocations.length);
        }
        if (this._currentGameIndex !== gameIndex) {
          this._stream = new token_stream_1.TokenStream(this._text, this._gameLocations[gameIndex]);
        }
        this._currentGameIndex = -1;
        const result = doParseGame(this._stream);
        this._currentGameIndex = gameIndex + 1;
        return result;
      }
    };
    function readDatabase(pgnString) {
      return new PGNDatabaseImpl(pgnString);
    }
    exports.readDatabase = readDatabase;
    function readOneGame(pgnString, gameIndex) {
      const stream = new token_stream_1.TokenStream(pgnString);
      let gameCounter = 0;
      while (gameCounter !== gameIndex) {
        if (stream.skipGame()) {
          ++gameCounter;
        } else {
          throw new exception_1.InvalidPGN(pgnString, -1, -1, i18n_1.i18n.INVALID_GAME_INDEX, gameIndex, gameCounter);
        }
      }
      return doParseGame(stream);
    }
    exports.readOneGame = readOneGame;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/pgn_write_impl.js
var require_pgn_write_impl = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/private_pgn/pgn_write_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeGames = exports.writeGame = void 0;
    var helper_1 = require_helper();
    var node_variation_1 = require_node_variation();
    var position_1 = require_position();
    var common_1 = require_common();
    function escapeHeaderValue(value) {
      return value.replace(/([\\"])/g, "\\$1");
    }
    function escapeCommentValue(value) {
      return value.replace(/([\\}])/g, "\\$1");
    }
    function formatNullableHeader(value) {
      if (value !== void 0) {
        value = (0, common_1.trimAndCollapseSpaces)(value);
      }
      return value ? escapeHeaderValue(value) : "?";
    }
    function formatDateHeader(date) {
      return date === void 0 ? "????.??.??" : date.toPGNString();
    }
    function formatVariant(variant) {
      switch (variant) {
        case "regular":
          return void 0;
        case "chess960":
          return "Fischerandom";
        case "antichess":
          return "Antichess";
        case "horde":
          return "Horde";
        default:
          return variant;
      }
    }
    function writeOptionalHeader(key, value) {
      if (value !== void 0) {
        value = (0, common_1.trimAndCollapseSpaces)(value);
      }
      return value ? `[${key} "${escapeHeaderValue(value)}"]
` : "";
    }
    function writeOptionalIntegerHeader(key, value) {
      return value === void 0 ? "" : `[${key} "${value}"]
`;
    }
    function writeAnnotations(node, skipLineAfterCommentIfLong, pushToken, skipLine) {
      for (const nag of node.nags()) {
        pushToken("$" + nag, false, false);
      }
      let comment = node.comment();
      if (comment !== void 0) {
        comment = (0, common_1.trimAndCollapseSpaces)(comment);
      }
      const tags = node.tags();
      const tagValues = /* @__PURE__ */ new Map();
      let nonEmptyTagFound = false;
      for (const tagKey of tags) {
        const tagValue = (0, common_1.trimAndCollapseSpaces)(node.tag(tagKey).replace(/[[\]]/g, ""));
        if (tagValue) {
          tagValues.set(tagKey, tagValue);
          nonEmptyTagFound = true;
        }
      }
      if (nonEmptyTagFound || comment) {
        if (comment && node.isLongComment() && node instanceof node_variation_1.Node) {
          skipLine();
        }
        pushToken("{", false, true);
        for (const tagKey of tags) {
          const tagValue = tagValues.get(tagKey);
          if (tagValue) {
            pushToken("[%" + tagKey, false, false);
            for (const token of escapeCommentValue(tagValue + "]").split(" ")) {
              pushToken(token, false, false);
            }
          }
        }
        if (comment) {
          for (const token of escapeCommentValue(comment).split(" ")) {
            pushToken(token, false, false);
          }
        }
        pushToken("}", true, false);
        if (comment && node.isLongComment() && skipLineAfterCommentIfLong) {
          skipLine();
        }
        return true;
      } else {
        return false;
      }
    }
    function writeNode(node, forceMoveNumber, isMainVariation, pushToken, skipLine) {
      if (node.moveColor() === "w") {
        pushToken(node.fullMoveNumber() + ".", false, false);
      } else if (forceMoveNumber) {
        pushToken(node.fullMoveNumber() + "...", false, false);
      }
      pushToken(node.notation(), false, false);
      const variations = node.variations();
      let lastNonEmptyVariationIndex = -1;
      for (let k = variations.length - 1; k >= 0; --k) {
        if (variations[k].first() !== void 0) {
          lastNonEmptyVariationIndex = k;
          break;
        }
      }
      let nextForceMoveNumber = writeAnnotations(node, (isMainVariation || node.next() !== void 0) && lastNonEmptyVariationIndex < 0, pushToken, skipLine);
      for (let k = 0; k < variations.length; ++k) {
        const variation = variations[k];
        if (variation.first() === void 0) {
          continue;
        }
        if (variation.isLongVariation()) {
          skipLine();
        }
        pushToken("(", false, true);
        writeVariation(variation, false, pushToken, skipLine);
        pushToken(")", true, false);
        if (k === lastNonEmptyVariationIndex && variation.isLongVariation()) {
          skipLine();
        }
        nextForceMoveNumber = true;
      }
      return nextForceMoveNumber;
    }
    function writeVariation(variation, isMainVariation, pushToken, skipLine) {
      writeAnnotations(variation, true, pushToken, skipLine);
      let currentNode = variation.first();
      let forceMoveNumber = true;
      while (currentNode !== void 0) {
        forceMoveNumber = writeNode(currentNode, forceMoveNumber, isMainVariation, pushToken, skipLine);
        currentNode = currentNode.next();
      }
    }
    function writeGame(game) {
      let result = "";
      result += '[Event "' + formatNullableHeader(game.event()) + '"]\n';
      result += '[Site "' + formatNullableHeader(game.site()) + '"]\n';
      result += '[Date "' + formatDateHeader(game.date()) + '"]\n';
      result += '[Round "' + formatNullableHeader(game.round()) + '"]\n';
      result += '[White "' + formatNullableHeader(game.playerName("w")) + '"]\n';
      result += '[Black "' + formatNullableHeader(game.playerName("b")) + '"]\n';
      result += '[Result "' + game.result() + '"]\n';
      const variant = game.variant();
      const initialPosition = game.initialPosition();
      const hasFENHeader = !(0, helper_1.variantWithCanonicalStartPosition)(variant) || !position_1.Position.isEqual(initialPosition, new position_1.Position(variant));
      result += writeOptionalHeader("Annotator", game.annotator());
      result += writeOptionalIntegerHeader("BlackElo", game.playerElo("b"));
      result += writeOptionalHeader("BlackTitle", game.playerTitle("b"));
      if (hasFENHeader) {
        result += '[FEN "' + initialPosition.fen({ fullMoveNumber: game.mainVariation().initialFullMoveNumber(), regularFENIfPossible: true }) + '"]\n';
        result += '[SetUp "1"]\n';
      }
      result += writeOptionalHeader("Variant", formatVariant(variant));
      result += writeOptionalIntegerHeader("WhiteElo", game.playerElo("w"));
      result += writeOptionalHeader("WhiteTitle", game.playerTitle("w"));
      result += "\n";
      let currentLine = "";
      let avoidNextSpace = false;
      function pushToken(token, avoidSpaceBefore, avoidSpaceAfter) {
        if (currentLine.length === 0) {
          currentLine = token;
        } else if (currentLine.length + token.length + (avoidNextSpace || avoidSpaceBefore ? 0 : 1) <= 80) {
          currentLine += (avoidNextSpace || avoidSpaceBefore ? "" : " ") + token;
        } else {
          result += currentLine + "\n";
          currentLine = token;
        }
        avoidNextSpace = avoidSpaceAfter;
      }
      function skipLine() {
        result += currentLine + "\n";
        result += "\n";
        currentLine = "";
        avoidNextSpace = false;
      }
      writeVariation(game.mainVariation(), true, pushToken, skipLine);
      pushToken(game.result(), false, false);
      result += currentLine + "\n";
      return result;
    }
    exports.writeGame = writeGame;
    function writeGames(games) {
      return games.map(writeGame).join("\n\n");
    }
    exports.writeGames = writeGames;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/pgn.js
var require_pgn = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/pgn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pgnWrite = exports.pgnRead = void 0;
    var database_1 = require_database();
    var exception_1 = require_exception();
    var game_1 = require_game();
    var pgn_read_impl_1 = require_pgn_read_impl();
    var pgn_write_impl_1 = require_pgn_write_impl();
    function pgnRead2(pgnString, gameIndex) {
      if (typeof pgnString !== "string") {
        throw new exception_1.IllegalArgument("pgnRead()");
      }
      if (arguments.length === 1) {
        return (0, pgn_read_impl_1.readDatabase)(pgnString);
      } else {
        if (!(0, database_1.isValidGameIndex)(gameIndex)) {
          throw new exception_1.IllegalArgument("pgnRead()");
        }
        return (0, pgn_read_impl_1.readOneGame)(pgnString, gameIndex);
      }
    }
    exports.pgnRead = pgnRead2;
    function pgnWrite(gameOrGames) {
      if (gameOrGames instanceof game_1.Game) {
        return (0, pgn_write_impl_1.writeGame)(gameOrGames);
      } else if (Array.isArray(gameOrGames) && gameOrGames.every((game) => game instanceof game_1.Game)) {
        return (0, pgn_write_impl_1.writeGames)(gameOrGames);
      } else {
        throw new exception_1.IllegalArgument("pgnWrite()");
      }
    }
    exports.pgnWrite = pgnWrite;
  }
});

// node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/kokopu@3.1.0/node_modules/kokopu/dist/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pgnWrite = exports.pgnRead = exports.Database = exports.Game = exports.Variation = exports.Node = exports.AbstractNode = exports.Position = exports.isMoveDescriptor = exports.MoveDescriptor = exports.DateValue = exports.nagSymbol = exports.variantWithCanonicalStartPosition = exports.oppositeColor = exports.coordinatesToSquare = exports.squareToCoordinates = exports.squareColor = exports.forEachSquare = exports.exception = exports.i18n = void 0;
    var i18n_1 = require_i18n();
    Object.defineProperty(exports, "i18n", { enumerable: true, get: function() {
      return i18n_1.i18n;
    } });
    exports.exception = require_exception();
    var helper_1 = require_helper();
    Object.defineProperty(exports, "forEachSquare", { enumerable: true, get: function() {
      return helper_1.forEachSquare;
    } });
    Object.defineProperty(exports, "squareColor", { enumerable: true, get: function() {
      return helper_1.squareColor;
    } });
    Object.defineProperty(exports, "squareToCoordinates", { enumerable: true, get: function() {
      return helper_1.squareToCoordinates;
    } });
    Object.defineProperty(exports, "coordinatesToSquare", { enumerable: true, get: function() {
      return helper_1.coordinatesToSquare;
    } });
    Object.defineProperty(exports, "oppositeColor", { enumerable: true, get: function() {
      return helper_1.oppositeColor;
    } });
    Object.defineProperty(exports, "variantWithCanonicalStartPosition", { enumerable: true, get: function() {
      return helper_1.variantWithCanonicalStartPosition;
    } });
    Object.defineProperty(exports, "nagSymbol", { enumerable: true, get: function() {
      return helper_1.nagSymbol;
    } });
    var date_value_1 = require_date_value();
    Object.defineProperty(exports, "DateValue", { enumerable: true, get: function() {
      return date_value_1.DateValue;
    } });
    var move_descriptor_1 = require_move_descriptor();
    Object.defineProperty(exports, "MoveDescriptor", { enumerable: true, get: function() {
      return move_descriptor_1.MoveDescriptor;
    } });
    Object.defineProperty(exports, "isMoveDescriptor", { enumerable: true, get: function() {
      return move_descriptor_1.isMoveDescriptor;
    } });
    var position_1 = require_position();
    Object.defineProperty(exports, "Position", { enumerable: true, get: function() {
      return position_1.Position;
    } });
    var node_variation_1 = require_node_variation();
    Object.defineProperty(exports, "AbstractNode", { enumerable: true, get: function() {
      return node_variation_1.AbstractNode;
    } });
    Object.defineProperty(exports, "Node", { enumerable: true, get: function() {
      return node_variation_1.Node;
    } });
    Object.defineProperty(exports, "Variation", { enumerable: true, get: function() {
      return node_variation_1.Variation;
    } });
    var game_1 = require_game();
    Object.defineProperty(exports, "Game", { enumerable: true, get: function() {
      return game_1.Game;
    } });
    var database_1 = require_database();
    Object.defineProperty(exports, "Database", { enumerable: true, get: function() {
      return database_1.Database;
    } });
    var pgn_1 = require_pgn();
    Object.defineProperty(exports, "pgnRead", { enumerable: true, get: function() {
      return pgn_1.pgnRead;
    } });
    Object.defineProperty(exports, "pgnWrite", { enumerable: true, get: function() {
      return pgn_1.pgnWrite;
    } });
  }
});

// node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge22;
    function merge22() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeLeadingDotSegment = exports.escape = exports.makeAbsolute = exports.unixify = void 0;
    var path2 = require("path");
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path2.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function escape(pattern) {
      return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escape = escape;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
  }
});

// node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash2 = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby2 = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash2) < 0) {
        str = str.replace(backslash, slash2);
      }
      if (enclosure.test(str)) {
        str += slash2;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby2.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state2 = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state2.isPadded = isPadded;
        state2.maxLen = String(state2.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state2, opts);
        a = state2.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state2, opts);
      }
      state2.negatives = negatives;
      state2.positives = positives;
      state2.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state2.result = `(${state2.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state2.result = `(?:${state2.result})`;
      }
      toRegexRange.cache[cacheKey] = state2;
      return state2.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, { ...options, wrap: false, toRegex: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      CHAR_0: "0",
      CHAR_9: "9",
      CHAR_UPPERCASE_A: "A",
      CHAR_LOWERCASE_A: "a",
      CHAR_UPPERCASE_Z: "Z",
      CHAR_LOWERCASE_Z: "z",
      CHAR_LEFT_PARENTHESES: "(",
      CHAR_RIGHT_PARENTHESES: ")",
      CHAR_ASTERISK: "*",
      CHAR_AMPERSAND: "&",
      CHAR_AT: "@",
      CHAR_BACKSLASH: "\\",
      CHAR_BACKTICK: "`",
      CHAR_CARRIAGE_RETURN: "\r",
      CHAR_CIRCUMFLEX_ACCENT: "^",
      CHAR_COLON: ":",
      CHAR_COMMA: ",",
      CHAR_DOLLAR: "$",
      CHAR_DOT: ".",
      CHAR_DOUBLE_QUOTE: '"',
      CHAR_EQUAL: "=",
      CHAR_EXCLAMATION_MARK: "!",
      CHAR_FORM_FEED: "\f",
      CHAR_FORWARD_SLASH: "/",
      CHAR_HASH: "#",
      CHAR_HYPHEN_MINUS: "-",
      CHAR_LEFT_ANGLE_BRACKET: "<",
      CHAR_LEFT_CURLY_BRACE: "{",
      CHAR_LEFT_SQUARE_BRACKET: "[",
      CHAR_LINE_FEED: "\n",
      CHAR_NO_BREAK_SPACE: "\xA0",
      CHAR_PERCENT: "%",
      CHAR_PLUS: "+",
      CHAR_QUESTION_MARK: "?",
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      CHAR_RIGHT_CURLY_BRACE: "}",
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      CHAR_SEMICOLON: ";",
      CHAR_SINGLE_QUOTE: "'",
      CHAR_SPACE: " ",
      CHAR_TAB: "	",
      CHAR_UNDERSCORE: "_",
      CHAR_VERTICAL_LINE: "|",
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      CHAR_BACKTICK,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_LEFT_PARENTHESES,
      CHAR_RIGHT_PARENTHESES,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_RIGHT_SQUARE_BRACKET,
      CHAR_DOUBLE_QUOTE,
      CHAR_SINGLE_QUOTE,
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      CHAR_0: 48,
      CHAR_9: 57,
      CHAR_UPPERCASE_A: 65,
      CHAR_LOWERCASE_A: 97,
      CHAR_UPPERCASE_Z: 90,
      CHAR_LOWERCASE_Z: 122,
      CHAR_LEFT_PARENTHESES: 40,
      CHAR_RIGHT_PARENTHESES: 41,
      CHAR_ASTERISK: 42,
      CHAR_AMPERSAND: 38,
      CHAR_AT: 64,
      CHAR_BACKWARD_SLASH: 92,
      CHAR_CARRIAGE_RETURN: 13,
      CHAR_CIRCUMFLEX_ACCENT: 94,
      CHAR_COLON: 58,
      CHAR_COMMA: 44,
      CHAR_DOT: 46,
      CHAR_DOUBLE_QUOTE: 34,
      CHAR_EQUAL: 61,
      CHAR_EXCLAMATION_MARK: 33,
      CHAR_FORM_FEED: 12,
      CHAR_FORWARD_SLASH: 47,
      CHAR_GRAVE_ACCENT: 96,
      CHAR_HASH: 35,
      CHAR_HYPHEN_MINUS: 45,
      CHAR_LEFT_ANGLE_BRACKET: 60,
      CHAR_LEFT_CURLY_BRACE: 123,
      CHAR_LEFT_SQUARE_BRACKET: 91,
      CHAR_LINE_FEED: 10,
      CHAR_NO_BREAK_SPACE: 160,
      CHAR_PERCENT: 37,
      CHAR_PLUS: 43,
      CHAR_QUESTION_MARK: 63,
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      CHAR_RIGHT_CURLY_BRACE: 125,
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      CHAR_SEMICOLON: 59,
      CHAR_SINGLE_QUOTE: 39,
      CHAR_SPACE: 32,
      CHAR_TAB: 9,
      CHAR_UNDERSCORE: 95,
      CHAR_VERTICAL_LINE: 124,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      SEP: path2.sep,
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state2 = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state2.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state2 = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state2.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      CHAR_AT,
      CHAR_BACKWARD_SLASH,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_EXCLAMATION_MARK,
      CHAR_FORWARD_SLASH,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_LEFT_PARENTHESES,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_PLUS,
      CHAR_QUESTION_MARK,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_RIGHT_PARENTHESES,
      CHAR_RIGHT_SQUARE_BRACKET
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state2 = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state2.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state2.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state2.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state2.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state2.slashes = slashes;
        state2.parts = parts;
      }
      return state2;
    };
    module2.exports = scan;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state2 = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state2);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state2.index === len - 1;
      const peek = state2.peek = (n = 1) => input[state2.index + n];
      const advance = state2.advance = () => input[++state2.index] || "";
      const remaining = () => input.slice(state2.index + 1);
      const consume = (value2 = "", num = 0) => {
        state2.consumed += value2;
        state2.index += num;
      };
      const append = (token) => {
        state2.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state2.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state2.negated = true;
        state2.start++;
        return true;
      };
      const increment = (type) => {
        state2[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state2[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state2.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state2.output = state2.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state2.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state2.parens;
        token.output = state2.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state2.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state2.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state2.output = input;
          return state2;
        }
        state2.output = utils.wrapOutput(output, state2, options);
        return state2;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state2.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state2.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state2.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state2.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state2.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state2.quotes = state2.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state2.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state2.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state2.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state2.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state2.output = state2.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state2.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state2.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state2.output.length,
            tokensIndex: state2.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state2.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state2.output.slice(0, brace.outputIndex);
            const toks = state2.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state2.output = out;
            for (const t of toks) {
              state2.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state2.index === state2.start + 1) {
            state2.start = state2.index + 1;
            state2.consumed = "";
            state2.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state2.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state2.braces + state2.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state2.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state2.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state2.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state2.backtrack = true;
          state2.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state2.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state2.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state2.output = prev.output;
            state2.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state2.output = state2.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state2.globstar = true;
            state2.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state2.output = state2.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state2.output += prior.output + prev.output;
            state2.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state2.output = prev.output;
            state2.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state2.output = state2.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state2.output += prev.output;
          state2.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state2.index === state2.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state2.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state2.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state2.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state2.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state2.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state2.output = utils.escapeLast(state2.output, "[");
        decrement("brackets");
      }
      while (state2.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state2.output = utils.escapeLast(state2.output, "(");
        decrement("parens");
      }
      while (state2.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state2.output = utils.escapeLast(state2.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state2.backtrack === true) {
        state2.output = "";
        for (const token of state2.tokens) {
          state2.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state2.output += token.suffix;
          }
        }
      }
      return state2;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state2 = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state2);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state3 = isMatch(str);
            if (state3)
              return state3;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state2 = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state: state2, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state2;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path2.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state2, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state2.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state2.output})${append}`;
      if (state2 && state2.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state2;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state2) => {
        items.add(state2.output);
        if (options && options.onResult) {
          options.onResult(state2);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state2) => {
        if (options.onResult)
          options.onResult(state2);
        items.push(state2.output);
      };
      let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    module2.exports = micromatch;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path2 = require("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern2(pattern, options);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern2(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern2;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern2(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern2(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern2;
    function isPositivePattern(pattern) {
      return !isNegativePattern2(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern2);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path2.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      return micromatch.braces(pattern, {
        expand: true,
        nodupes: true
      });
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge22 = require_merge2();
    function merge(streams) {
      const mergedStream = merge22(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array = require_array();
    exports.array = array;
    var errno = require_errno();
    exports.errno = errno;
    var fs3 = require_fs();
    exports.fs = fs3;
    var path2 = require_path();
    exports.path = path2;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(patterns, settings) {
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, false);
      const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, true);
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/patterns.js
var require_patterns = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/patterns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeDuplicateSlashes = exports.transform = void 0;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function transform(patterns) {
      return patterns.map((pattern) => removeDuplicateSlashes(pattern));
    }
    exports.transform = transform;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings, callback) {
      settings.fs.lstat(path2, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path2, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings) {
      const lstat = settings.fs.lstatSync(path2);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path2);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports.read = read;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs3 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs3.lstat,
      stat: fs3.stat,
      lstatSync: fs3.lstatSync,
      statSync: fs3.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs3 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs3.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat;
    function statSync2(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path2, settings);
    }
    exports.statSync = statSync2;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js"(exports, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js"(exports, module2) {
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb)
            cb(err, results);
          cb = null;
        }
        if (isSync)
          queueMicrotask2(end);
        else
          end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs3 = require_fs3();
    exports.fs = fs3;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common2();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path2 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path2, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path2,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common2();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs3 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs3.lstat,
      stat: fs3.stat,
      lstatSync: fs3.lstatSync,
      statSync: fs3.statSync,
      readdir: fs3.readdir,
      readdirSync: fs3.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var fs3 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs3.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path2, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/reusify@1.0.4/node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "node_modules/.pnpm/reusify@1.0.4/node_modules/reusify/reusify.js"(exports, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});

// node_modules/.pnpm/fastq@1.13.0/node_modules/fastq/queue.js
var require_queue = __commonJS({
  "node_modules/.pnpm/fastq@1.13.0/node_modules/fastq/queue.js"(exports, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self2 = {
        push,
        drain: noop,
        saturated: noop,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop,
        kill,
        killAndDrain,
        error
      };
      return self2;
      function running() {
        return _running;
      }
      function pause() {
        self2.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self2.paused)
          return;
        self2.paused = false;
        for (var i = 0; i < self2.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self2.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self2.concurrency || self2.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self2.concurrency || self2.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self2.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker.call(context, next.value, next.worked);
            if (queueTail === null) {
              self2.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self2.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self2.drain = noop;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self2.drain();
        self2.drain = noop;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop() {
    }
    function Task() {
      this.value = null;
      this.callback = noop;
      this.next = null;
      this.release = noop;
      this.context = null;
      this.errorHandler = null;
      var self2 = this;
      this.worked = function worked(err, result) {
        var callback = self2.callback;
        var errorHandler = self2.errorHandler;
        var val = self2.value;
        self2.value = null;
        self2.callback = noop;
        if (self2.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self2.context, err, result);
        self2.release(self2);
      };
    }
    function queueAsPromised(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function drained() {
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
          queue.drain = function() {
            previousDrain();
            resolve();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common3();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common3();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common3();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path2.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root, options) {
        return this._walkStream(root, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var stream_1 = require_stream3();
    var ReaderAsync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
      }
      dynamic(root, options) {
        return new Promise((resolve, reject) => {
          this._walkAsync(root, options, (error, entries) => {
            if (error === null) {
              resolve(entries);
            } else {
              reject(error);
            }
          });
        });
      }
      async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        return new Promise((resolve, reject) => {
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(entry));
          stream.once("end", () => resolve(entries));
        });
      }
    };
    exports.default = ReaderAsync;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        const patterns = utils.pattern.expandPatternsWithBraceExpansion(this._patterns);
        for (const pattern of patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info2) => !info2.complete || info2.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, this._micromatchOptions);
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        if (this._settings.unique && this._isDuplicateEntry(entry)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
          return false;
        }
        const filepath = this._settings.baseNameMatch ? entry.name : entry.path;
        const isDirectory = entry.dirent.isDirectory();
        const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(entry.path, negativeRe, isDirectory);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(entry);
        }
        return isMatched;
      }
      _isDuplicateEntry(entry) {
        return this.index.has(entry.path);
      }
      _createIndexRecord(entry) {
        this.index.set(entry.path, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
      }
      _isMatchToPatterns(entryPath, patternsRe, isDirectory) {
        const filepath = utils.path.removeLeadingDotSegment(entryPath);
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        if (!isMatched && isDirectory) {
          return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
      }
    };
    exports.default = EntryFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path2.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async5();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new async_1.default(this._settings);
      }
      async read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root, task, options);
        return entries.map((entry) => options.transform(entry));
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderAsync;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderStream;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root, options) {
        return this._walkSync(root, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderSync;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs3 = require("fs");
    var os = require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs3.lstat,
      lstatSync: fs3.lstatSync,
      stat: fs3.stat,
      statSync: fs3.statSync,
      readdir: fs3.readdir,
      readdirSync: fs3.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var patternManager = require_patterns();
    var async_1 = require_async6();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput2(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      function sync(source, options) {
        assertPatternsInput2(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync;
      function stream(source, options) {
        assertPatternsInput2(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks2(source, options) {
        assertPatternsInput2(source);
        const patterns = patternManager.transform([].concat(source));
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks2;
      function isDynamicPattern2(source, options) {
        assertPatternsInput2(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern2;
      function escapePath(source) {
        assertPatternsInput2(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = patternManager.transform([].concat(source));
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput2(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});

// node_modules/.pnpm/path-type@4.0.0/node_modules/path-type/index.js
var require_path_type = __commonJS({
  "node_modules/.pnpm/path-type@4.0.0/node_modules/path-type/index.js"(exports) {
    "use strict";
    var { promisify } = require("util");
    var fs3 = require("fs");
    async function isType(fsStatType, statsMethodName, filePath) {
      if (typeof filePath !== "string") {
        throw new TypeError(`Expected a string, got ${typeof filePath}`);
      }
      try {
        const stats = await promisify(fs3[fsStatType])(filePath);
        return stats[statsMethodName]();
      } catch (error) {
        if (error.code === "ENOENT") {
          return false;
        }
        throw error;
      }
    }
    function isTypeSync(fsStatType, statsMethodName, filePath) {
      if (typeof filePath !== "string") {
        throw new TypeError(`Expected a string, got ${typeof filePath}`);
      }
      try {
        return fs3[fsStatType](filePath)[statsMethodName]();
      } catch (error) {
        if (error.code === "ENOENT") {
          return false;
        }
        throw error;
      }
    }
    exports.isFile = isType.bind(null, "stat", "isFile");
    exports.isDirectory = isType.bind(null, "stat", "isDirectory");
    exports.isSymlink = isType.bind(null, "lstat", "isSymbolicLink");
    exports.isFileSync = isTypeSync.bind(null, "statSync", "isFile");
    exports.isDirectorySync = isTypeSync.bind(null, "statSync", "isDirectory");
    exports.isSymlinkSync = isTypeSync.bind(null, "lstatSync", "isSymbolicLink");
  }
});

// node_modules/.pnpm/dir-glob@3.0.1/node_modules/dir-glob/index.js
var require_dir_glob = __commonJS({
  "node_modules/.pnpm/dir-glob@3.0.1/node_modules/dir-glob/index.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var pathType = require_path_type();
    var getExtensions = (extensions) => extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0];
    var getPath = (filepath, cwd) => {
      const pth = filepath[0] === "!" ? filepath.slice(1) : filepath;
      return path2.isAbsolute(pth) ? pth : path2.join(cwd, pth);
    };
    var addExtensions = (file, extensions) => {
      if (path2.extname(file)) {
        return `**/${file}`;
      }
      return `**/${file}.${getExtensions(extensions)}`;
    };
    var getGlob = (directory, options) => {
      if (options.files && !Array.isArray(options.files)) {
        throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof options.files}\``);
      }
      if (options.extensions && !Array.isArray(options.extensions)) {
        throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof options.extensions}\``);
      }
      if (options.files && options.extensions) {
        return options.files.map((x) => path2.posix.join(directory, addExtensions(x, options.extensions)));
      }
      if (options.files) {
        return options.files.map((x) => path2.posix.join(directory, `**/${x}`));
      }
      if (options.extensions) {
        return [path2.posix.join(directory, `**/*.${getExtensions(options.extensions)}`)];
      }
      return [path2.posix.join(directory, "**")];
    };
    module2.exports = async (input, options) => {
      options = {
        cwd: process.cwd(),
        ...options
      };
      if (typeof options.cwd !== "string") {
        throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
      }
      const globs = await Promise.all([].concat(input).map(async (x) => {
        const isDirectory = await pathType.isDirectory(getPath(x, options.cwd));
        return isDirectory ? getGlob(x, options) : x;
      }));
      return [].concat.apply([], globs);
    };
    module2.exports.sync = (input, options) => {
      options = {
        cwd: process.cwd(),
        ...options
      };
      if (typeof options.cwd !== "string") {
        throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
      }
      const globs = [].concat(input).map((x) => pathType.isDirectorySync(getPath(x, options.cwd)) ? getGlob(x, options) : x);
      return [].concat.apply([], globs);
    };
  }
});

// node_modules/.pnpm/ignore@5.2.0/node_modules/ignore/index.js
var require_ignore = __commonJS({
  "node_modules/.pnpm/ignore@5.2.0/node_modules/ignore/index.js"(exports, module2) {
    function makeArray(subject) {
      return Array.isArray(subject) ? subject : [subject];
    }
    var EMPTY = "";
    var SPACE = " ";
    var ESCAPE = "\\";
    var REGEX_TEST_BLANK_LINE = /^\s+$/;
    var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
    var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
    var REGEX_SPLITALL_CRLF = /\r?\n/g;
    var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
    var SLASH = "/";
    var KEY_IGNORE = typeof Symbol !== "undefined" ? Symbol.for("node-ignore") : "node-ignore";
    var define2 = (object, key, value) => Object.defineProperty(object, key, { value });
    var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
    var RETURN_FALSE = () => false;
    var sanitizeRange = (range) => range.replace(
      REGEX_REGEXP_RANGE,
      (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY
    );
    var cleanRangeBackSlash = (slashes) => {
      const { length } = slashes;
      return slashes.slice(0, length - length % 2);
    };
    var REPLACERS = [
      [
        /\\?\s+$/,
        (match) => match.indexOf("\\") === 0 ? SPACE : EMPTY
      ],
      [
        /\\\s/g,
        () => SPACE
      ],
      [
        /[\\$.|*+(){^]/g,
        (match) => `\\${match}`
      ],
      [
        /(?!\\)\?/g,
        () => "[^/]"
      ],
      [
        /^\//,
        () => "^"
      ],
      [
        /\//g,
        () => "\\/"
      ],
      [
        /^\^*\\\*\\\*\\\//,
        () => "^(?:.*\\/)?"
      ],
      [
        /^(?=[^^])/,
        function startingReplacer() {
          return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
        }
      ],
      [
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        (_, index, str) => index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
      ],
      [
        /(^|[^\\]+)\\\*(?=.+)/g,
        (_, p1) => `${p1}[^\\/]*`
      ],
      [
        /\\\\\\(?=[$.|*+(){^])/g,
        () => ESCAPE
      ],
      [
        /\\\\/g,
        () => ESCAPE
      ],
      [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
      ],
      [
        /(?:[^*])$/,
        (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
      ],
      [
        /(\^|\\\/)?\\\*$/,
        (_, p1) => {
          const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
          return `${prefix}(?=$|\\/$)`;
        }
      ]
    ];
    var regexCache = /* @__PURE__ */ Object.create(null);
    var makeRegex = (pattern, ignoreCase) => {
      let source = regexCache[pattern];
      if (!source) {
        source = REPLACERS.reduce(
          (prev, current) => prev.replace(current[0], current[1].bind(pattern)),
          pattern
        );
        regexCache[pattern] = source;
      }
      return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
    };
    var isString = (subject) => typeof subject === "string";
    var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && pattern.indexOf("#") !== 0;
    var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF);
    var IgnoreRule = class {
      constructor(origin, pattern, negative, regex) {
        this.origin = origin;
        this.pattern = pattern;
        this.negative = negative;
        this.regex = regex;
      }
    };
    var createRule = (pattern, ignoreCase) => {
      const origin = pattern;
      let negative = false;
      if (pattern.indexOf("!") === 0) {
        negative = true;
        pattern = pattern.substr(1);
      }
      pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
      const regex = makeRegex(pattern, ignoreCase);
      return new IgnoreRule(
        origin,
        pattern,
        negative,
        regex
      );
    };
    var throwError = (message, Ctor) => {
      throw new Ctor(message);
    };
    var checkPath = (path2, originalPath, doThrow) => {
      if (!isString(path2)) {
        return doThrow(
          `path must be a string, but got \`${originalPath}\``,
          TypeError
        );
      }
      if (!path2) {
        return doThrow(`path must not be empty`, TypeError);
      }
      if (checkPath.isNotRelative(path2)) {
        const r = "`path.relative()`d";
        return doThrow(
          `path should be a ${r} string, but got "${originalPath}"`,
          RangeError
        );
      }
      return true;
    };
    var isNotRelative = (path2) => REGEX_TEST_INVALID_PATH.test(path2);
    checkPath.isNotRelative = isNotRelative;
    checkPath.convert = (p) => p;
    var Ignore = class {
      constructor({
        ignorecase = true,
        ignoreCase = ignorecase,
        allowRelativePaths = false
      } = {}) {
        define2(this, KEY_IGNORE, true);
        this._rules = [];
        this._ignoreCase = ignoreCase;
        this._allowRelativePaths = allowRelativePaths;
        this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null);
        this._testCache = /* @__PURE__ */ Object.create(null);
      }
      _addPattern(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
          this._rules = this._rules.concat(pattern._rules);
          this._added = true;
          return;
        }
        if (checkPattern(pattern)) {
          const rule = createRule(pattern, this._ignoreCase);
          this._added = true;
          this._rules.push(rule);
        }
      }
      add(pattern) {
        this._added = false;
        makeArray(
          isString(pattern) ? splitPattern(pattern) : pattern
        ).forEach(this._addPattern, this);
        if (this._added) {
          this._initCache();
        }
        return this;
      }
      addPattern(pattern) {
        return this.add(pattern);
      }
      _testOne(path2, checkUnignored) {
        let ignored = false;
        let unignored = false;
        this._rules.forEach((rule) => {
          const { negative } = rule;
          if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
            return;
          }
          const matched = rule.regex.test(path2);
          if (matched) {
            ignored = !negative;
            unignored = negative;
          }
        });
        return {
          ignored,
          unignored
        };
      }
      _test(originalPath, cache, checkUnignored, slices) {
        const path2 = originalPath && checkPath.convert(originalPath);
        checkPath(
          path2,
          originalPath,
          this._allowRelativePaths ? RETURN_FALSE : throwError
        );
        return this._t(path2, cache, checkUnignored, slices);
      }
      _t(path2, cache, checkUnignored, slices) {
        if (path2 in cache) {
          return cache[path2];
        }
        if (!slices) {
          slices = path2.split(SLASH);
        }
        slices.pop();
        if (!slices.length) {
          return cache[path2] = this._testOne(path2, checkUnignored);
        }
        const parent = this._t(
          slices.join(SLASH) + SLASH,
          cache,
          checkUnignored,
          slices
        );
        return cache[path2] = parent.ignored ? parent : this._testOne(path2, checkUnignored);
      }
      ignores(path2) {
        return this._test(path2, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (path2) => !this.ignores(path2);
      }
      filter(paths) {
        return makeArray(paths).filter(this.createFilter());
      }
      test(path2) {
        return this._test(path2, this._testCache, true);
      }
    };
    var factory = (options) => new Ignore(options);
    var isPathValid = (path2) => checkPath(path2 && checkPath.convert(path2), path2, RETURN_FALSE);
    factory.isPathValid = isPathValid;
    factory.default = factory;
    module2.exports = factory;
    if (typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")) {
      const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
      checkPath.convert = makePosix;
      const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
      checkPath.isNotRelative = (path2) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path2) || isNotRelative(path2);
    }
  }
});

// node_modules/.pnpm/slash@4.0.0/node_modules/slash/index.js
function slash(path2) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path2);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path2);
  if (isExtendedLengthPath || hasNonAscii) {
    return path2;
  }
  return path2.replace(/\\/g, "/");
}
var init_slash = __esm({
  "node_modules/.pnpm/slash@4.0.0/node_modules/slash/index.js"() {
  }
});

// node_modules/.pnpm/globby@13.1.2/node_modules/globby/utilities.js
var import_node_url, import_node_stream, toPath, FilterStream, isNegativePattern;
var init_utilities = __esm({
  "node_modules/.pnpm/globby@13.1.2/node_modules/globby/utilities.js"() {
    import_node_url = require("url");
    import_node_stream = require("stream");
    toPath = (urlOrPath) => urlOrPath instanceof URL ? (0, import_node_url.fileURLToPath)(urlOrPath) : urlOrPath;
    FilterStream = class extends import_node_stream.Transform {
      constructor(filter) {
        super({
          objectMode: true,
          transform(data4, encoding, callback) {
            callback(void 0, filter(data4) ? data4 : void 0);
          }
        });
      }
    };
    isNegativePattern = (pattern) => pattern[0] === "!";
  }
});

// node_modules/.pnpm/globby@13.1.2/node_modules/globby/ignore.js
var import_node_process, import_node_fs, import_node_path, import_fast_glob, import_ignore, ignoreFilesGlobOptions, GITIGNORE_FILES_PATTERN, applyBaseToPattern, parseIgnoreFile, toRelativePath, getIsIgnoredPredicate, normalizeOptions, isIgnoredByIgnoreFiles, isIgnoredByIgnoreFilesSync, isGitIgnored, isGitIgnoredSync;
var init_ignore = __esm({
  "node_modules/.pnpm/globby@13.1.2/node_modules/globby/ignore.js"() {
    import_node_process = __toESM(require("process"), 1);
    import_node_fs = __toESM(require("fs"), 1);
    import_node_path = __toESM(require("path"), 1);
    import_fast_glob = __toESM(require_out4(), 1);
    import_ignore = __toESM(require_ignore(), 1);
    init_slash();
    init_utilities();
    ignoreFilesGlobOptions = {
      ignore: [
        "**/node_modules",
        "**/flow-typed",
        "**/coverage",
        "**/.git"
      ],
      absolute: true,
      dot: true
    };
    GITIGNORE_FILES_PATTERN = "**/.gitignore";
    applyBaseToPattern = (pattern, base) => isNegativePattern(pattern) ? "!" + import_node_path.default.posix.join(base, pattern.slice(1)) : import_node_path.default.posix.join(base, pattern);
    parseIgnoreFile = (file, cwd) => {
      const base = slash(import_node_path.default.relative(cwd, import_node_path.default.dirname(file.filePath)));
      return file.content.split(/\r?\n/).filter((line) => line && !line.startsWith("#")).map((pattern) => applyBaseToPattern(pattern, base));
    };
    toRelativePath = (fileOrDirectory, cwd) => {
      cwd = slash(cwd);
      if (import_node_path.default.isAbsolute(fileOrDirectory)) {
        if (slash(fileOrDirectory).startsWith(cwd)) {
          return import_node_path.default.relative(cwd, fileOrDirectory);
        }
        throw new Error(`Path ${fileOrDirectory} is not in cwd ${cwd}`);
      }
      return fileOrDirectory;
    };
    getIsIgnoredPredicate = (files, cwd) => {
      const patterns = files.flatMap((file) => parseIgnoreFile(file, cwd));
      const ignores = (0, import_ignore.default)().add(patterns);
      return (fileOrDirectory) => {
        fileOrDirectory = toPath(fileOrDirectory);
        fileOrDirectory = toRelativePath(fileOrDirectory, cwd);
        return ignores.ignores(slash(fileOrDirectory));
      };
    };
    normalizeOptions = (options = {}) => ({
      cwd: toPath(options.cwd) || import_node_process.default.cwd()
    });
    isIgnoredByIgnoreFiles = async (patterns, options) => {
      const { cwd } = normalizeOptions(options);
      const paths = await (0, import_fast_glob.default)(patterns, { cwd, ...ignoreFilesGlobOptions });
      const files = await Promise.all(
        paths.map(async (filePath) => ({
          filePath,
          content: await import_node_fs.default.promises.readFile(filePath, "utf8")
        }))
      );
      return getIsIgnoredPredicate(files, cwd);
    };
    isIgnoredByIgnoreFilesSync = (patterns, options) => {
      const { cwd } = normalizeOptions(options);
      const paths = import_fast_glob.default.sync(patterns, { cwd, ...ignoreFilesGlobOptions });
      const files = paths.map((filePath) => ({
        filePath,
        content: import_node_fs.default.readFileSync(filePath, "utf8")
      }));
      return getIsIgnoredPredicate(files, cwd);
    };
    isGitIgnored = (options) => isIgnoredByIgnoreFiles(GITIGNORE_FILES_PATTERN, options);
    isGitIgnoredSync = (options) => isIgnoredByIgnoreFilesSync(GITIGNORE_FILES_PATTERN, options);
  }
});

// node_modules/.pnpm/globby@13.1.2/node_modules/globby/index.js
var globby_exports = {};
__export(globby_exports, {
  generateGlobTasks: () => generateGlobTasks,
  generateGlobTasksSync: () => generateGlobTasksSync,
  globby: () => globby,
  globbyStream: () => globbyStream,
  globbySync: () => globbySync,
  isDynamicPattern: () => isDynamicPattern,
  isGitIgnored: () => isGitIgnored,
  isGitIgnoredSync: () => isGitIgnoredSync
});
var import_node_fs2, import_node_path2, import_merge2, import_fast_glob2, import_dir_glob, assertPatternsInput, toPatternsArray, checkCwdOption, normalizeOptions2, normalizeArguments, normalizeArgumentsSync, getIgnoreFilesPatterns, getFilter, getFilterSync, createFilterFunction, unionFastGlobResults, unionFastGlobStreams, convertNegativePatterns, getDirGlobOptions, generateTasks, generateTasksSync, globby, globbySync, globbyStream, isDynamicPattern, generateGlobTasks, generateGlobTasksSync;
var init_globby = __esm({
  "node_modules/.pnpm/globby@13.1.2/node_modules/globby/index.js"() {
    import_node_fs2 = __toESM(require("fs"), 1);
    import_node_path2 = __toESM(require("path"), 1);
    import_merge2 = __toESM(require_merge2(), 1);
    import_fast_glob2 = __toESM(require_out4(), 1);
    import_dir_glob = __toESM(require_dir_glob(), 1);
    init_ignore();
    init_utilities();
    init_ignore();
    assertPatternsInput = (patterns) => {
      if (patterns.some((pattern) => typeof pattern !== "string")) {
        throw new TypeError("Patterns must be a string or an array of strings");
      }
    };
    toPatternsArray = (patterns) => {
      patterns = [...new Set([patterns].flat())];
      assertPatternsInput(patterns);
      return patterns;
    };
    checkCwdOption = (options) => {
      if (!options.cwd) {
        return;
      }
      let stat;
      try {
        stat = import_node_fs2.default.statSync(options.cwd);
      } catch {
        return;
      }
      if (!stat.isDirectory()) {
        throw new Error("The `cwd` option must be a path to a directory");
      }
    };
    normalizeOptions2 = (options = {}) => {
      options = {
        ignore: [],
        expandDirectories: true,
        ...options,
        cwd: toPath(options.cwd)
      };
      checkCwdOption(options);
      return options;
    };
    normalizeArguments = (fn) => async (patterns, options) => fn(toPatternsArray(patterns), normalizeOptions2(options));
    normalizeArgumentsSync = (fn) => (patterns, options) => fn(toPatternsArray(patterns), normalizeOptions2(options));
    getIgnoreFilesPatterns = (options) => {
      const { ignoreFiles, gitignore } = options;
      const patterns = ignoreFiles ? toPatternsArray(ignoreFiles) : [];
      if (gitignore) {
        patterns.push(GITIGNORE_FILES_PATTERN);
      }
      return patterns;
    };
    getFilter = async (options) => {
      const ignoreFilesPatterns = getIgnoreFilesPatterns(options);
      return createFilterFunction(
        ignoreFilesPatterns.length > 0 && await isIgnoredByIgnoreFiles(ignoreFilesPatterns, { cwd: options.cwd })
      );
    };
    getFilterSync = (options) => {
      const ignoreFilesPatterns = getIgnoreFilesPatterns(options);
      return createFilterFunction(
        ignoreFilesPatterns.length > 0 && isIgnoredByIgnoreFilesSync(ignoreFilesPatterns, { cwd: options.cwd })
      );
    };
    createFilterFunction = (isIgnored) => {
      const seen = /* @__PURE__ */ new Set();
      return (fastGlobResult) => {
        const path2 = fastGlobResult.path || fastGlobResult;
        const pathKey = import_node_path2.default.normalize(path2);
        const seenOrIgnored = seen.has(pathKey) || isIgnored && isIgnored(path2);
        seen.add(pathKey);
        return !seenOrIgnored;
      };
    };
    unionFastGlobResults = (results, filter) => results.flat().filter((fastGlobResult) => filter(fastGlobResult));
    unionFastGlobStreams = (streams, filter) => (0, import_merge2.default)(streams).pipe(new FilterStream((fastGlobResult) => filter(fastGlobResult)));
    convertNegativePatterns = (patterns, options) => {
      const tasks = [];
      while (patterns.length > 0) {
        const index = patterns.findIndex((pattern) => isNegativePattern(pattern));
        if (index === -1) {
          tasks.push({ patterns, options });
          break;
        }
        const ignorePattern = patterns[index].slice(1);
        for (const task of tasks) {
          task.options.ignore.push(ignorePattern);
        }
        if (index !== 0) {
          tasks.push({
            patterns: patterns.slice(0, index),
            options: {
              ...options,
              ignore: [
                ...options.ignore,
                ignorePattern
              ]
            }
          });
        }
        patterns = patterns.slice(index + 1);
      }
      return tasks;
    };
    getDirGlobOptions = (options, cwd) => ({
      ...cwd ? { cwd } : {},
      ...Array.isArray(options) ? { files: options } : options
    });
    generateTasks = async (patterns, options) => {
      const globTasks = convertNegativePatterns(patterns, options);
      const { cwd, expandDirectories } = options;
      if (!expandDirectories) {
        return globTasks;
      }
      const patternExpandOptions = getDirGlobOptions(expandDirectories, cwd);
      const ignoreExpandOptions = cwd ? { cwd } : void 0;
      return Promise.all(
        globTasks.map(async (task) => {
          let { patterns: patterns2, options: options2 } = task;
          [
            patterns2,
            options2.ignore
          ] = await Promise.all([
            (0, import_dir_glob.default)(patterns2, patternExpandOptions),
            (0, import_dir_glob.default)(options2.ignore, ignoreExpandOptions)
          ]);
          return { patterns: patterns2, options: options2 };
        })
      );
    };
    generateTasksSync = (patterns, options) => {
      const globTasks = convertNegativePatterns(patterns, options);
      const { cwd, expandDirectories } = options;
      if (!expandDirectories) {
        return globTasks;
      }
      const patternExpandOptions = getDirGlobOptions(expandDirectories, cwd);
      const ignoreExpandOptions = cwd ? { cwd } : void 0;
      return globTasks.map((task) => {
        let { patterns: patterns2, options: options2 } = task;
        patterns2 = import_dir_glob.default.sync(patterns2, patternExpandOptions);
        options2.ignore = import_dir_glob.default.sync(options2.ignore, ignoreExpandOptions);
        return { patterns: patterns2, options: options2 };
      });
    };
    globby = normalizeArguments(async (patterns, options) => {
      const [
        tasks,
        filter
      ] = await Promise.all([
        generateTasks(patterns, options),
        getFilter(options)
      ]);
      const results = await Promise.all(tasks.map((task) => (0, import_fast_glob2.default)(task.patterns, task.options)));
      return unionFastGlobResults(results, filter);
    });
    globbySync = normalizeArgumentsSync((patterns, options) => {
      const tasks = generateTasksSync(patterns, options);
      const filter = getFilterSync(options);
      const results = tasks.map((task) => import_fast_glob2.default.sync(task.patterns, task.options));
      return unionFastGlobResults(results, filter);
    });
    globbyStream = normalizeArgumentsSync((patterns, options) => {
      const tasks = generateTasksSync(patterns, options);
      const filter = getFilterSync(options);
      const streams = tasks.map((task) => import_fast_glob2.default.stream(task.patterns, task.options));
      return unionFastGlobStreams(streams, filter);
    });
    isDynamicPattern = normalizeArgumentsSync(
      (patterns, options) => patterns.some((pattern) => import_fast_glob2.default.isDynamicPattern(pattern, options))
    );
    generateGlobTasks = normalizeArguments(generateTasks);
    generateGlobTasksSync = normalizeArgumentsSync(generateTasksSync);
  }
});

// src/index.ts
var import_fs2 = require("fs");
var log3 = __toESM(require_pilogger());

// src/uci.ts
var log = __toESM(require_pilogger());
var import_child_process = require("child_process");
var import_fs = require("fs");
var Score = class {
  constructor(score, type) {
    __publicField(this, "score");
    __publicField(this, "type");
    this.score = score;
    this.type = type;
  }
  toString() {
    switch (this.type) {
      case "exact":
        return this.score;
      case "mate":
        return `mate in ${this.score}`;
      case "lowerbound":
        return `>= ${this.score}`;
      case "upperbound":
        return `<= ${this.score}`;
      default:
        return "";
    }
  }
};
var UCI = class {
  constructor(options) {
    __publicField(this, "instance");
    __publicField(this, "buffer");
    __publicField(this, "timeout");
    __publicField(this, "startTime", process.hrtime.bigint());
    __publicField(this, "name", "");
    __publicField(this, "info", []);
    __publicField(this, "lines", /* @__PURE__ */ new Map());
    __publicField(this, "depth", 0);
    __publicField(this, "options", { lines: 25, depth: 10, maxtime: 1e3, engine: "", nnue: "", debug: false, options: [] });
    __publicField(this, "state");
    __publicField(this, "turn");
    __publicField(this, "engineOptions", []);
    __publicField(this, "duration", 0);
    if (options?.depth)
      this.options.depth = options.depth;
    if (options?.lines)
      this.options.lines = options.lines;
    if (options?.maxtime)
      this.options.maxtime = options.maxtime;
    if (options?.debug)
      this.options.debug = options.debug;
    if (options?.engine)
      this.options.engine = options.engine;
    if (options?.nnue)
      this.options.nnue = options.nnue;
    if (options?.options)
      this.options.options = options.options;
    if (!(0, import_fs.existsSync)(this.options.engine))
      throw new Error(`uci: engine not found: ${this.options.engine}`);
    if (!(0, import_fs.statSync)(this.options.engine).isFile())
      throw new Error(`uci: engine not valid: ${this.options.engine}`);
    this.instance = (0, import_child_process.spawn)(this.options.engine);
    this.buffer = Buffer.alloc(0);
    this.instance.stdout?.on("data", (chunk) => {
      if (this.options.debug)
        log.data("sf", { stdout: chunk.toString() });
      chunk = Buffer.concat([this.buffer, chunk]);
      const lastNewline = chunk.lastIndexOf("\n");
      if (lastNewline !== chunk.length - 1)
        this.buffer = chunk.slice(lastNewline + 1);
      else
        this.buffer = Buffer.alloc(0);
      this.process(chunk.slice(0, lastNewline).toString());
    });
    this.send("uci");
    this.send("setoption name UCI_AnalyseMode value true");
    if (this.options.nnue.length > 0) {
      this.send(`setoption name EvalFile value ${this.options.nnue}`);
      this.send("setoption name Use NNUE value true");
    } else {
      this.send("setoption name Use NNUE value false");
    }
    for (const option of this.options.options) {
      this.send(`setoption name ${option}`);
    }
    this.send("go depth 1");
    this.send("stop");
    this.send("isready");
    this.state = "starting";
    this.reset();
  }
  async reset() {
    this.startTime = process.hrtime.bigint();
    this.duration = 0;
    this.lines = /* @__PURE__ */ new Map();
    this.depth = 0;
    this.state = "busy";
    this.send("ucinewgame");
    this.send("isready");
    await this.ready();
  }
  async ready() {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.state === "ready") {
          clearInterval(interval);
          resolve(true);
        }
      }, 5);
    });
  }
  set fen(fenString) {
    this.send(`position fen ${fenString}`);
    this.turn = fenString.split(" ")[1] === "w" ? "white" : "black";
  }
  set move(movesString) {
    this.send(`position startpos moves ${movesString}`);
    this.turn = movesString.split(" ").length % 2 ? "black" : "white";
  }
  start(options) {
    this.state = "busy";
    this.startTime = process.hrtime.bigint();
    this.startTime = process.hrtime.bigint();
    this.lines = /* @__PURE__ */ new Map();
    this.depth = 0;
    if (options?.depth)
      this.options.depth = options.depth;
    if (options?.lines)
      this.options.lines = options.lines;
    if (options?.maxtime)
      this.options.maxtime = options.maxtime;
    if (this.options.lines > 1)
      this.send(`setoption name MultiPV value ${this.options.lines}`);
    if (this.options.depth)
      this.send(`go depth ${this.options.depth}`);
    else
      this.send("go infinite");
    if (this.timeout)
      clearTimeout(this.timeout);
    if (this.options.maxtime)
      this.timeout = setTimeout(() => this.stop(), this.options.maxtime);
  }
  stop() {
    this.send("stop");
    this.state = "stopping";
  }
  process(chunk) {
    const lines = chunk.split("\n").map((line) => line.trim()).filter((line) => line.length > 0);
    for (const line of lines) {
      if (line.startsWith("id name"))
        this.name = line.replace("id name ", "");
      if (line.startsWith("option"))
        this.engineOptions.push(line.replace("option name ", ""));
      if (line.startsWith("uciok"))
        this.state = "started";
      if (line.startsWith("readyok") || line.startsWith("bestmove")) {
        this.duration = Number((process.hrtime.bigint() - this.startTime) / 1000n / 1000n);
        this.state = "ready";
      }
      if (this.state !== "ready" && this.state !== "busy")
        continue;
      if (line.startsWith("info")) {
        if (line.includes("pv")) {
          this.processInfo(line);
        } else if (line.includes("mate 0") || line.includes("cp 0")) {
          this.processNoLegalMoves();
        } else if (line.startsWith("info string")) {
          const info2 = line.replace("info string ", "");
          if (!this.info.includes(info2))
            this.info.push(info2);
        } else if (line.includes("currmove")) {
          continue;
        } else {
          log.data("sf unknown line", { line });
        }
      }
    }
  }
  processInfo(line) {
    if (line.indexOf(" score ") === -1 || line.indexOf(" depth ") === -1 || line.indexOf(" multipv ") === -1)
      return;
    const depthIndexBegin = line.indexOf(" depth ") + 7;
    const depthIndexEnd = line.indexOf(" ", depthIndexBegin);
    const depth = +line.substring(depthIndexBegin, depthIndexEnd);
    const lineNumberIndexBegin = line.indexOf(" multipv ") + 9;
    const lineNumberIndexEnd = line.indexOf(" ", lineNumberIndexBegin);
    const lineNumber = +line.substring(lineNumberIndexBegin, lineNumberIndexEnd);
    const scoreTypeIndexBegin = line.indexOf(" score ") + 7;
    const scoreTypeIndexEnd = line.indexOf(" ", scoreTypeIndexBegin);
    const scoreType = line.substring(scoreTypeIndexBegin, scoreTypeIndexEnd);
    const scoreIndexBegin = scoreTypeIndexEnd + 1;
    const scoreIndexEnd = line.indexOf(" ", scoreIndexBegin);
    let score;
    if (scoreType === "cp") {
      score = new Score(+line.substring(scoreIndexBegin, scoreIndexEnd) / 100, "exact");
    } else if (scoreType === "mate") {
      score = new Score(+line.substring(scoreIndexBegin, scoreIndexEnd), "mate");
    } else if (scoreType === "lowerbound") {
      score = new Score(+line.substring(scoreIndexBegin, scoreIndexEnd) / 100, "lowerbound");
    } else if (scoreType === "upperbound") {
      score = new Score(+line.substring(scoreIndexBegin, scoreIndexEnd) / 100, "upperbound");
    } else {
      log.data("sf unknown score", { scoreType });
      return;
    }
    if (this.turn === "black")
      score.score *= -1;
    const movesIndexBegin = line.indexOf(" pv ") + 4;
    const moves = line.substring(movesIndexBegin).split(" ");
    if (!this.lines.has(depth))
      this.lines.set(depth, []);
    const linesOfdepth = this.lines.get(depth) || [];
    const bestScore = linesOfdepth[0]?.score?.score || 0;
    const cpl = Math.round(100 * (score.score - bestScore)) / 100;
    linesOfdepth[lineNumber - 1] = { score, moves, cpl };
    const numLinesOfdepth = linesOfdepth?.filter((l) => l !== null).length;
    const analysisComplete = numLinesOfdepth === this.options.lines || depth > 1 && numLinesOfdepth === this.lines.get(1)?.length;
    if (analysisComplete && depth > this.depth)
      this.depth = depth;
  }
  processNoLegalMoves() {
    return { depth: 0, time: this.duration, lines: [], noLegalMoves: true };
  }
  get best() {
    return { depth: this.depth, time: this.duration, lines: this.lines.get(this.depth) || [] };
  }
  send(str) {
    this.instance?.stdin?.write(`${str}
`);
  }
  terminate() {
    this.send("stop");
    this.send("quit");
    setTimeout(() => this.instance.kill("SIGTERM"), 10);
    setTimeout(() => this.instance.kill("SIGKILL"), 100);
    setTimeout(() => {
      if (this.options.debug)
        log.data("sf exit", { code: this.instance.exitCode, signal: this.instance.signalCode });
    }, 200);
    this.state = "terminated";
  }
};

// src/game.ts
var log2 = __toESM(require_pilogger());
var import_kokopu = __toESM(require_lib());
var Move = class {
  constructor(node) {
    __publicField(this, "i");
    __publicField(this, "move");
    __publicField(this, "best", "");
    __publicField(this, "score", 0);
    __publicField(this, "cpl", 0);
    __publicField(this, "color");
    __publicField(this, "symbol");
    __publicField(this, "fen");
    __publicField(this, "flags");
    this.i = node?.fullMoveNumber();
    this.symbol = node?.figurineNotation();
    this.move = `${node?._data.moveDescriptor.from()}${node?._data.moveDescriptor.to()}`;
    this.color = node?.moveColor();
    this.fen = node?.position().fen();
    this.flags = void 0;
  }
};
var Game = class {
  constructor(data4) {
    __publicField(this, "file");
    __publicField(this, "game");
    __publicField(this, "moves");
    __publicField(this, "date");
    __publicField(this, "analyzed");
    __publicField(this, "players");
    __publicField(this, "result");
    __publicField(this, "win");
    __publicField(this, "line");
    __publicField(this, "color");
    __publicField(this, "acpl");
    __publicField(this, "pgn", []);
    __publicField(this, "engine", { name: "", info: [], options: void 0, time: 0 });
    __publicField(this, "summary", { amazing: 0, great: 0, good: 0, bad: 0, mistake: 0, blunder: 0 });
    this.analyzed = new Date();
    this.file = data4?.file;
    this.game = data4?.game || 0;
    this.moves = data4?.moves || 0;
    this.date = data4?.date;
    this.players = data4?.players || ["", ""];
    this.line = data4?.line || [];
    this.color = data4?.color;
    this.acpl = data4?.acpl || 0;
    if (data4?.pgn)
      this.pgn = data4.pgn;
    if (data4?.engine)
      this.engine = data4.engine;
  }
};
var getACPL = (game) => {
  if (!game.color)
    return void 0;
  const meaningfullMoves = game.line.filter((move) => Math.abs(move.score) > 0 && Math.abs(move.score) < 10 && game.color?.startsWith(move.color));
  const acpl = Math.round(100 * meaningfullMoves.reduce((prev, curr) => prev += Math.abs(curr.cpl), 0) / meaningfullMoves.length);
  return acpl;
};
var getFlags = (move) => {
  if (move.flags)
    return move.flags;
  if (Math.abs(move.score) > 10)
    return void 0;
  if (move.cpl > 3)
    return "blunder";
  if (move.cpl > 1)
    return "mistake";
  if (move.cpl > 0.5)
    return "bad";
  if (move.cpl > 0.2)
    return "good";
  if (move.cpl > 0.1)
    return "great";
  if (move.cpl < -0.1)
    return "amazing";
  return "best";
};
async function processPGN(engine, pgnText, pgnFile, playerName2) {
  const database = (0, import_kokopu.pgnRead)(pgnText);
  const games = [];
  for (let i = 0; i < database.gameCount(); i++) {
    const t0 = process.hrtime.bigint();
    let pgnGame;
    try {
      pgnGame = database.game(i);
    } catch (err) {
      continue;
    }
    const players = [pgnGame.playerName("w") || "", pgnGame.playerName("b") || ""];
    let color;
    if (players[0] === playerName2)
      color = "white";
    if (players[1] === playerName2)
      color = "black";
    const variation = pgnGame.mainVariation();
    const nodes = variation.nodes();
    const game = new Game({
      file: pgnFile,
      game: i + 1,
      moves: Math.round(nodes.length / 2),
      date: pgnGame.dateAsDate(),
      players,
      color,
      pgn: pgnText.split("\n"),
      engine: { name: engine.name, info: engine.info, options: engine.options, time: 0 }
    });
    game.result = pgnGame.result();
    if (color === "white")
      game.win = game.result === "1-0";
    if (color === "black")
      game.win = game.result === "0-1";
    await engine.reset();
    for (let j = 0; j <= nodes.length; j++) {
      const move = new Move(nodes[j]);
      if (j > 0) {
        const prev = move.i ? new Move(nodes[j].previous()) : new Move(nodes[j - 1]);
        if (prev.fen)
          engine.fen = prev.fen;
      }
      engine.start();
      await engine.ready();
      const best = engine.best.lines[0];
      if (!best) {
        if (engine.options.debug)
          log2.warn("sf engine return no move", { move, best });
        continue;
      }
      move.best = best.moves[0];
      if (move.i)
        game.line.push(move);
      if (best.score.type === "exact") {
        move.cpl = best.score.score;
        if (j > 0 && game.line[j - 1]) {
          game.line[j - 1].score = best.score.score;
          game.line[j - 1].cpl = Math.round(100 * (game.line[j - 1].cpl - best.score.score)) / 100;
        }
      }
      if (best.score.type === "mate") {
        if (j > 0 && game.line[j - 1]) {
          game.line[j - 1].score = game.color?.startsWith(move.color) ? 99 : -99;
          game.line[j - 1].cpl = 0;
          move.flags = `mate in ${best.score.score}`;
        }
      }
      if (engine.options.debug) {
        best.moves.length = 1;
        log2.data("move", { move });
        log2.data("engine", { move: move.i, depth: engine.best.depth, time: engine.best.time, lines: engine.best.lines.length, best });
      }
    }
    const t1 = process.hrtime.bigint();
    game.line.length = Math.min(game.line.length, nodes.length);
    game.acpl = getACPL(game);
    game.line.forEach((move) => move.score *= game.color === "white" ? 1 : -1);
    game.line.forEach((move) => move.cpl *= move.color === "b" ? -1 : 1);
    game.line.forEach((move) => move.flags = getFlags(move));
    if (game.color) {
      game.summary = {
        amazing: game.line.filter((move) => move.flags === "amazing" && game.color?.startsWith(move.color)).length,
        great: game.line.filter((move) => move.flags === "great" && game.color?.startsWith(move.color)).length,
        good: game.line.filter((move) => move.flags === "good" && game.color?.startsWith(move.color)).length,
        bad: game.line.filter((move) => move.flags === "bad" && game.color?.startsWith(move.color)).length,
        mistake: game.line.filter((move) => move.flags === "mistake" && game.color?.startsWith(move.color)).length,
        blunder: game.line.filter((move) => move.flags === "blunder" && game.color?.startsWith(move.color)).length
      };
    }
    game.engine.time = Math.round(Number(t1 - t0) / 1e3 / 1e3);
    games.push(game);
  }
  return games;
}

// src/index.ts
var playerName = "VladMandic";
var uciOptions = {
  debug: false,
  lines: 1,
  depth: 12,
  maxtime: 500,
  engine: "/home/vlado/dev/chess/engine/sf15-bmi2",
  nnue: "nn-6877cd24400e.nnue",
  options: ["Threads value 16"]
};
async function main() {
  log3.configure({ inspect: { breakLength: 400 } });
  log3.headerJson();
  const engine = new UCI(uciOptions);
  await engine.ready();
  log3.state("engine", { name: engine.name, state: engine.state, info: engine.info });
  log3.state("options", engine.options);
  const games = [];
  let files = [];
  const args = process.argv.slice(2);
  const globby2 = await Promise.resolve().then(() => (init_globby(), globby_exports));
  files = await globby2.globby(args, { expandDirectories: true, gitignore: true, deep: 2 });
  log3.info({ files });
  for (const file of files) {
    const text = (0, import_fs2.readFileSync)(file, "utf8");
    const pgnGames = await processPGN(engine, text, file, playerName);
    log3.state({ file, games: pgnGames.length });
    games.push(...pgnGames);
    for (const game of pgnGames) {
      log3.data({
        file: game.file,
        game: game.game,
        date: game.date,
        players: game.players,
        win: game.win,
        color: game.color,
        moves: game.moves,
        acpl: game.acpl,
        time: game.engine.time,
        summary: game.summary
      });
    }
  }
  engine.terminate();
  process.exit(0);
}
main();
//# sourceMappingURL=chess.js.map
