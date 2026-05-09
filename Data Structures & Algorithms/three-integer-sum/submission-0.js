class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sum = [];
        const dups = new Set();
        for(let i=0; i<nums.length; i++) {
            const target = -(nums[i]); // negative of i should equal to j + k
            const m = new Map();
            for(let j=i+1; j<nums.length; j++) {
                const prevInd = m.get(nums[j]); 
                if (prevInd) {
                    const ind = [-target, nums[prevInd], nums[j]].sort((a, b) => a - b).join(""); // unique triplet key
                    if (dups.has(ind)) {
                        continue;
                    }
                    sum.push([-target, nums[prevInd], nums[j]]);
                    dups.add(ind);
                }
                const r = target - nums[j];
                m.set(r, j);
            }
        }
        return sum;
    }
}
