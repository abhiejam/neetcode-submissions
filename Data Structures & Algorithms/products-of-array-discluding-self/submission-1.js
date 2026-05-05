class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [];
        let i = 0;
        let prod = 1;
        while(i < nums.length) {
            if (i === 0) {
                left.push(prod);
            }
            else {
                prod = prod * nums[i-1];
                left.push(prod);
            }
            i++;
        }

        const right = [];
        let j = nums.length - 1;
        let prodRight = 1;
        while(j >= 0) {
            if (j === (nums.length - 1)) {
                right.push(prodRight);
            }
            else {
                prodRight = prodRight * nums[j+1];
                right.unshift(prodRight);
            }
            j--;
        }

        const numProducts = [];
        for(let k = 0; k < nums.length; k++) {
            numProducts[k] = left[k] * right[k];
        }
        return numProducts;
    }
}
