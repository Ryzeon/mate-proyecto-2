export const generateRandom = (n) => {
    const min_value = 1;
    const max_value = 9;
    const matrix = [];
    for (let i = 0; i < n; ++i) {
        const row = [];
        for (let j = 0; j < n; ++j) {
            row.push(0);
        }
        matrix.push(row);
    }

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i === j) continue;
            matrix[i][j] = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
            matrix[j][i] = matrix[i][j];
        }
    }

    return matrix
}

export const matrixInput = (n) => {
    const matrix = [];
    for (let i = 0; i < n; ++i) {
        const row = [];
        for (let j = 0; j < n; ++j) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix
}

export const dijkstra_min = (matrix, n, src, target) => {
    const dist = dijkstra(matrix, n, src);

    if (dist[target] !== Infinity) {
        return dist[target];
    } else {
        return -1;
    }
};

export const dijkstra_paths_= (matrix, n, src, target) => {
    let dist = dijkstra(matrix, n, src);
    let path = [target];
    let current = target;
    while (current !== src) {
        for (let i = 0; i < n; ++i) {
            if (matrix[current][i] !== 0 && dist[current] - matrix[current][i] === dist[i]) {
                path.push(i);
                current = i;
                break;
            }
        }
    }
    return path.reverse();
};

export const dijkstra = (matrix, n, src) => {
    const dist = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);

    dist[src] = 0;

    for (let i = 0; i < n; ++i) {
        const u = findMinDistVertex(dist, visited);
        visited[u] = true;

        for (let v = 0; v < n; ++v) {
            if (!visited[v] && matrix[u][v] !== 0) {
                dist[v] = Math.min(dist[v], dist[u] + matrix[u][v]);
            }
        }
    }

    return dist;
};

const findMinDistVertex = (dist, visited) => {
    let minDist = Infinity;
    let minIndex = -1;

    for (let i = 0; i < dist.length; ++i) {
        if (!visited[i] && dist[i] < minDist) {
            minDist = dist[i];
            minIndex = i;
        }
    }

    return minIndex;
};
