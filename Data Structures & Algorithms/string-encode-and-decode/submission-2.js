class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        const decoded = [];
        while(i < str.length) {
            const indx = str.indexOf('#', i);
            const len = parseInt(str.slice(i, indx));
            const wordIndx = indx + 1;
            const lastIndex = wordIndx + len;
            const decodedWord = str.slice(wordIndx, lastIndex);
            decoded.push(decodedWord);

            i = lastIndex;
        }
        return decoded;
    }
}