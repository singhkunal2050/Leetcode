/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [l, r] = [0, 1];
    let maxProfit = 0;
    
    while(r < prices.length){
        let profit = prices[r] - prices[l]; 

        if(profit > 0){
            maxProfit = Math.max(profit, maxProfit);
        } else {
            l = r; // found a low point so move left to the low point
        }
        r++;
    }
    
    return maxProfit;
    
    
};