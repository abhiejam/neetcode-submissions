class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const str1 = this.getMappedString(s);
        const str2 = this.getMappedString(t);
        const largest = str1.size > str2.size ? str1 : str2; 

        for(const [key, value] of largest) {
            const ch1 = str1.get(key);
            const ch2 = str2.get(key);
            if (ch1 !== ch2) {
                return false;
            }
        }
        return true;
    }

    /** 
     * Return the count of each character of string
     */
    getMappedString(s) {
        const str = new Map();
        for(const s1 of s) {
            const charCount = str.has(s1) ? str.get(s1) + 1: 1;
            str.set(s1, charCount);
        }
        return str;
    }
}
