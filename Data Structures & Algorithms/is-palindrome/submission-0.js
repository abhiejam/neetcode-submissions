class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /**
         * - use regex to match only alphanumeric chars
         * - convert to lowercase
         * - use two pointer to compare
         */
        if (s.length === 0) {
            return false;
        }

        if (s.length === 1) {
            return true;
        }

        let str = s.replace(/[^a-zA-Z0-9]/g, "");
        str = str.toLowerCase();
        
        let i=0;
        let j= str.length-1;
        while(i<str.length) {
            if (i === j) {
                break;
            }

            if(str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
