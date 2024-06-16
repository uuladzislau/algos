/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const rows = [];

  // iterate over rows (0 < numRows)
  for (let i = 0; i < numRows; i++) {
    const row = [];

    // iterate over columns (0 <= number of the current row)
    for (let j = 0; j <= i; j++) {
      // if the most left or right elements of the row -> add one
      if (j === 0 || j === i) {
        row[j] = 1;
      }
      // otherwise calculate current number as sum of elements from the
      // previous row (rows[i-1]) with column indexes [j] and [j-1]
      else {
        const prevRow = rows[i - 1];
        row[j] = prevRow[j] + prevRow[j - 1];
      }
    }

    rows[i] = row;
  }

  return rows;
};


describe('118. Pascal\'s Triangle', () => {

  it('Case #1', () => {
    expect(generate(5)).toStrictEqual([
      [ 1 ],
      [ 1, 1 ],
      [ 1, 2, 1 ],
      [ 1, 3, 3, 1 ],
      [ 1, 4, 6, 4, 1 ],
    ]);
  });

});