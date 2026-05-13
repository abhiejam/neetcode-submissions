class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max_water = 0;
        if(heights.length < 2) {
            return max_water;
        }

        let i = 0;
        let j = heights.length - 1;

        while(i < j) {
            const f = heights[i];
            const l = heights[j];

            const w = (j - i) * Math.min(f, l);
            if (w > max_water) {
                max_water = w;
            }

            if (f < l) {
                i++;
            }
            else {
                j--;
            }
        }

        return max_water;
    }
}
