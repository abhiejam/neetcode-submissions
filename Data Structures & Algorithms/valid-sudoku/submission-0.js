class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Validate row
        const row = Array.from({length: 9}, () => new Set());
        const col = Array.from({length: 9}, () => new Set());
        const box = Array.from({length: 9}, () => new Set());

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board.length; c++) {
                const item = board[r][c];
                // Only accept 1-9 or '.'
                if (item === "."){
                    continue;
                }
                const boardInd = Math.floor(r / 3) * 3 + Math.floor(c /3);
                if(row[r].has(item) || col[c].has(item) || box[boardInd].has(item)) {
                    return false; 
                }
                row[r].add(item);
                col[c].add(item);
                box[boardInd].add(item);
            }
        }


        return true;
    }
}
