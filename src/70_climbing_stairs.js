/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const solutions = [1, 2];

  if (n <= 2) return solutions[n - 1];

  for (let i = 3; i <= n; i++) {
    const newLocalSolution = solutions[1] + solutions[0];

    solutions[0] = solutions[1];
    solutions[1] = newLocalSolution;
  }

  return solutions[1];
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
