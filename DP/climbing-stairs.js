class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //either you can climb 1 step or 2
        // 1,2,3,4,5,6

        // 1 = [1]
        // 2 = [1],[2]
        // 3 = [1,2], [2,1], [1,1,1]
        // 4 = n(2) + n(3)
        // 5 = n(3) + n(4)

        let steps = new Array(n)
        steps[0] = 1
        steps[1] = 2

        for(let i = 2; i<n; i++){
            steps[i] = steps[i-1] + steps[i-2]
        }

        return steps[n-1]

    }
}
// Create an instance of the Solution class
const solution = new Solution();

// Call the climbStairs method with the desired input
const result = solution.climbStairs(5);
console.log(result); // Output: 8