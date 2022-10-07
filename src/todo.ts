export const array1Dto2D = (arr: unknown[], rows: number, cols: number): unknown[][] => {
  const res: unknown[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: unknown[] = [];
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      if (i < arr.length) row.push(arr[i]);
    }
    res.push(row);
  }
  return res;
};
