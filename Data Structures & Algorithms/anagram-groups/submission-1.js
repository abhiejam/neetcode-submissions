class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * - write a method that returns the character count of each string
         * - define an array that track all verified anagrams
         * - iterate over the array of string
         * - if the index is in verified anagram, skip 
         * - if not, check if anagram of current string
         * - push those anagram string to array
         * - add the index of anagram strins to verified anagrams
         */
        if (strs.length === 0) {
            return [""];
        }

        if (strs.length === 1) {
            return [strs];
        }

        const anagramsGrp = [];
        const computedStrIndex = [];
        for (let i = 0; i < strs.length; i++) {
            if (computedStrIndex.includes(i)){
                continue;
            }
            
            const curCharCnt = this.getCharactersCount(strs[i]);
            const currentAnagramList = [];
            currentAnagramList.push(strs[i]);
            for (let j = i + 1; j < strs.length; j++) {
                if (computedStrIndex.includes(j)){
                    continue;
                }
                const nextCharCnt = this.getCharactersCount(strs[j]);

                const isAnagram = this.isAnagram(curCharCnt, nextCharCnt);
                
                if (isAnagram) {
                    currentAnagramList.push(strs[j]);
                    computedStrIndex.push(j);
                }
            }
            computedStrIndex.push(i);
            anagramsGrp.push(currentAnagramList);
        }
        return anagramsGrp;
    }

    getCharactersCount(str) {
        const charCounts = new Map();
        for (const s of str) {
            charCounts.set(s, (charCounts.get(s) || 0) + 1);
        }
        return charCounts;
    }

    /**
     * str1 - Map
     * str2 - Map
     */
    isAnagram(str1, str2) {
        if (str1.size !== str2.size) {
            return false;
        }
        for (const [index, value] of str1) {
            if (value !== str2.get(index)) {
                return false;
            }
        }
        return true;
    }
}
