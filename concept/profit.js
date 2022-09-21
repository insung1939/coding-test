//n 기간 동안의 주식가격 변화를 기준으로 낼수있는 가장 큰 수익 계산하기
//가장 쌀 때 사서 가장 비쌀 때 팔기

const test1 = [100, 200, 50, 30, 150, 250];
const test2 = [150, 80, 60, 50, 30];

function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  }
  return maxProfit;
}
console.log(maxProfit(test1));
console.log(maxProfit(test2));
