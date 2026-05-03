class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMaps = new Map();
        for(let i=0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (numMaps.has(complement)) {
                return [numMaps.get(complement), i];
            }
            numMaps.set(nums[i], i);
        }
        return [];
    }
}
