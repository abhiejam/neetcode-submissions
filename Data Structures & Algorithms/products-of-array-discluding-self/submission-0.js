class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numProducts = [];
        for(let i = 0; i < nums.length; i++) {
            const prod = nums.reduce((acc, current, index) => {
                if (index === i) return acc;
                return acc * current;
            }, 1);
            numProducts.push(prod);
        }
        return numProducts;
    }
}
