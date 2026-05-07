class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const m = new Map(); 
        for(let i=0; i< numbers.length; i++) {
            const num = numbers[i];
            if (m.has(num)) {
                return [m.get(num), i+1];
            }
            const rNum = target - num;
            m.set(rNum, i+1);
        }
        return [];
    }
}
