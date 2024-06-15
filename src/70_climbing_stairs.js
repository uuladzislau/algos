/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const solutions = {
    1: 1,
    2: 2
  };

  for (let i = 3; i <= n; i++) {
    const solution = solutions[i - 1] + solutions[i - 2];
    solutions[i] = solution;
    console.log(`Solution for ${i}=${solutions[i]}`);
  }

  return solutions[n];
};

describe('70. Climbing Stairs', () => {

  it('Case #1', () => {
    expect(climbStairs(3)).toStrictEqual(3);
  });

  it('Case #2', () => {
    expect(climbStairs(2)).toStrictEqual(2);
  });

  it('Case #3', () => {
    expect(climbStairs(4)).toStrictEqual(5);
  });

  it('Case #45', () => {
    expect(climbStairs(45)).toStrictEqual(1836311903);
  });
});
