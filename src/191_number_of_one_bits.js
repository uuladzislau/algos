/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  const binaryNumber = (n >>> 0).toString(2);

  let count = 0;

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] !== '0') count++;
  }

  return count;
};


describe('191. Number of 1 Bits', () => {

  it('Case #1', () =>{
    expect(hammingWeight(11)).toStrictEqual(3);
  });

  it('Case #1', () =>{
    expect(hammingWeight(128)).toStrictEqual(1);
  });

  it('Case #1', () =>{
    expect(hammingWeight(2147483645)).toStrictEqual(30);
  });
});