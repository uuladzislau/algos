/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let prevRow = null;
  let row = null;

  // iterate over rows (0 < numRows)
  for (let i = 0; i <= rowIndex; i++) {
    row = [];

    // iterate over columns (0 <= number of the current row)
    for (let j = 0; j <= i; j++) {
      // if the most left or right elements of the row -> add one
      if (j === 0 || j === i) {
        row[j] = 1;
      }
      // otherwise calculate current number as sum of elements from the
      // previous row (rows[i-1]) with column indexes [j] and [j-1]
      else {
        row[j] = prevRow[j] + prevRow[j - 1];
      }
    }
    prevRow = row;
  }

  return row;
};


describe('119. Pascal\'s Triangle II', () => {

  it('Case #1', () => {
    expect(getRow(3)).toStrictEqual([ 1, 3, 3, 1 ]);
  });

});