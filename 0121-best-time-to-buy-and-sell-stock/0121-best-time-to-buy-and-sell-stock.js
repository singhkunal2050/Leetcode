/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [l, r] = [0, 1];
    let maxProfit = 0;
    
    while(r < prices.length){
        let profit = prices[r] - prices[l]; 
        maxProfit = Math.max(profit, maxProfit);

        if(profit < 0){
            l = r; // found a low point so move left to the low point
        }
        r++;
    }
    
    return maxProfit;
    
    
};