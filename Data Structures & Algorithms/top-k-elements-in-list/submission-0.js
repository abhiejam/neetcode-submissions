class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numFreq = new Map();
        for (const num of nums) {
            numFreq.set(num, (numFreq.get(num) || 0) + 1);
        }

        const numArr = [...numFreq].map(([key, value]) => ({num: key, freq : value}));
        numArr.sort((a, b) => b.freq - a.freq);
        const topkEl = numArr.slice(0, k);
        return topkEl.map((val) => val.num);
    }
}
