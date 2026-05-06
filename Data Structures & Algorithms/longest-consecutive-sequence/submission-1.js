class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 1) {
            return nums.length;
        }

        const sNum = nums.sort((a, b) => a - b);
        const m = new Map();
        let curInd = sNum[0];
        m.set(curInd, 1);

        for(let i=1; i < sNum.length; i++) {
            const prevNum = sNum[i-1];
            const currNum = sNum[i];
            const diff = currNum - prevNum;

            if (diff === 0) {
                continue;
            }
            
            // If diff is 1, continue counting current num
            if(diff === 1) {
                m.set(curInd, m.get(curInd) + 1)
            }
            // If diff is > 1, create new counting sequence
            else {
                curInd = currNum;
                m.set(curInd, 1);
            }
        }

        const counts = [...m.values()];
        const sCounts = counts.sort((a, b) => a-b);
        return sCounts[sCounts.length - 1];
    }
}
