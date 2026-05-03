class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGrp = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");

            if (!anagramGrp[key]) {
                anagramGrp[key] = [];
            }

            anagramGrp[key].push(str);
        }
        return Object.values(anagramGrp);
    }
}
