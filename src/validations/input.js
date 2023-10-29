export const validateNumber = (number) => {
    return ((number>0&&number<10)? true : false)
}

export const validateMatrix = (n, matrix) => {
    for(let i=0; i<n; ++i) {
        for(let j=0; j<n; ++j) {
            if(matrix[i][j] !== matrix[j][i]) {
                return false; // la yesiengañada
            }
        }
    }
    return true;
}