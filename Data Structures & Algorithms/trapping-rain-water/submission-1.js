class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length < 3) {
            return 0;
        }
        const maxLeft = [];
        for (let i = 0; i < height.length; i++) {
            const left = height.slice(0, i);
            const max = Math.max(...left);
            if (Number.isFinite(max)) {
                maxLeft.push(max);
            }
            else {
                maxLeft.push(0);
            }
        }

        const maxRight = [];
        for (let j = 1; j <= height.length; j++) {
            const right = j !== 1? height.slice(-j+1): [];
            const max = Math.max(...right);
            if (Number.isFinite(max)) {
                maxRight.unshift(max);
            }
            else {
                maxRight.unshift(0);
            }
        }

        let total = 0;
        for (let k = 0; k < height.length; k++) {
            const trapW = Math.min(maxLeft[k], maxRight[k]) - height[k];
            if (trapW > 0) {
                total += trapW;
            }
        }

        return total;
    }
}
