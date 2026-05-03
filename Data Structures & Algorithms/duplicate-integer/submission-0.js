class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = new Set(nums);
        return uniqueNums.size !== nums.length;
    }
}
