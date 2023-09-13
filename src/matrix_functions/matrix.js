export const generateRandom = (n) => {
    const min_value = 1;
    const max_value = 9;
    const matrix = [];
    for(let i=0; i<n; ++i) {
        const row = [];
        for(let j=0; j<n; ++j) {
            row.push(0);
        }
        matrix.push(row);
    }

    for(let i=0; i<n; ++i) {
        for(let j=0; j<n; ++j) {
            if(i===j) continue;
            matrix[i][j] = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
            matrix[j][i] = matrix[i][j];
        }
    }

    return matrix
}

export const matrixInput = (n) => {
    const matrix = [];
    for(let i=0; i<n; ++i) {
        const row = [];
        for(let j=0; j<n; ++j) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix
}

/**
 *
 * @param matrix as simetric matriz
 * @param n -> size of matrix
 * @param start -> start node
 */
export const dijkstra = (matrix, n, start) => {
    // OLA NO SE QUE HAGO CON MI VIDA
    // PERO ESPERO QUE LA CLASE DE COMPLEJIDAD
    // ME SALVE LA VIDA :)
}