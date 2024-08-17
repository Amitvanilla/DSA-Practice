class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Input: cost = [1,2,1,2,1,1,1]
        //minCost[0,0,1,2,2,3,3]


        // Output: 4

        let minCost = new Array(cost.length)
        minCost[0] = 0
        minCost[1] = 0

        let len = cost.length

        if(len === 1) return 0
        if(len === 2) return 0

        for(let i = 2; i<cost.length; i++){
            minCost[i] = Math.min(minCost[i-2]+cost[i-2], minCost[i-1]+cost[i-1])
        }
        return Math.min(minCost[cost.length-1] + cost[cost.length-1], minCost[cost.length-2] + cost[cost.length-2])

    }
}
let solution = new Solution();
let  cost = [1,2,1,2,1,1,1]
console.log(solution.minCostClimbingStairs(cost));