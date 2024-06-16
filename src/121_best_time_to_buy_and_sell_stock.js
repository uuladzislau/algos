/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let bestBuy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {

    if (prices[i] < bestBuy) {
      bestBuy = prices[i];
    } else if (prices[i] - bestBuy > profit) {
      profit = prices[i] - bestBuy;
    }

  }

  return profit;
};

describe('121. Best Time to Buy and Sell Stock', () => {

  it('Case #1', () => {
    expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5);
  });

  it('Case #2', () => {
    expect(maxProfit([7,6,4,3,1])).toStrictEqual(0);
  });

  it('Case #3', () => {
    expect(maxProfit([1,2])).toStrictEqual(1);
  });

  it('Case #4', () => {
    expect(maxProfit([2,1,2,1,0,0,1])).toStrictEqual(1);
  });

  it('Case #5', () => {
    expect(maxProfit([2,4,1])).toStrictEqual(2);
  });

});
