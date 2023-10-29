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
            //matrix[j][i] = matrix[i][j];
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

export const dijkstra = (matrix, start, end, setDistanceMin, setPathMin) => {
    const numNodes = matrix.length;
    const distances = new Array(numNodes).fill(Number.POSITIVE_INFINITY);
    const visited = new Array(numNodes).fill(false);
    const previousNodes = new Array(numNodes).fill(null);

    distances[start] = 0;

    for (let i = 0; i < numNodes; i++) {
        const currentNode = findMinDistanceNode(distances, visited);
        if (currentNode === -1) break; // Todos los nodos inalcanzables han sido procesados
        visited[currentNode] = true;

        for (let neighbor = 0; neighbor < numNodes; neighbor++) {
            if (!visited[neighbor] && matrix[currentNode][neighbor] !== 0) {
                const newDistance = distances[currentNode] + matrix[currentNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previousNodes[neighbor] = currentNode;

                }
            }
        }
    }

    // Reconstruir el camino desde el nodo de destino hasta el nodo de origen
    const path = [];
    let currentNode = end;
    while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previousNodes[currentNode];
    }

    console.log('distances: ' , distances);
    setDistanceMin(distances[end]);
    setPathMin(path);
}
  
function findMinDistanceNode(distances, visited) {
    let minDistance = Number.POSITIVE_INFINITY;
    let minDistanceNode = -1;
    for (let i = 0; i < distances.length; i++) {
        if (!visited[i] && distances[i] < minDistance) {
            minDistance = distances[i];
            minDistanceNode = i;
        }
    }
    return minDistanceNode;
}

/* export const dijkstraWithPath = (matrix, n, src, dest) => {
    const dist = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    const parents = Array(n).fill(-1);

    dist[src] = 0;

    for (let i = 0; i < n; ++i) {
        console.log('findMinDistVertex')
        const u = findMinDistVertex(dist, visited);
        visited[u] = true;

        for (let v = 0; v < n; ++v) {
            console.log('2dofor dijkstraWithPath')
            if (!visited[v] && matrix[u][v] !== 0 && dist[u] + matrix[u][v] < dist[v]) {
                dist[v] = dist[u] + matrix[u][v];
                parents[v] = u;
            }
        }
    }

    //const path = reconstructPath(parents, src, dest);
    const path = null;
    console.log(dist[dest], dist)
    return { distance: dist[dest], path };
};

const findMinDistVertex = (dist, visited) => {
    let minDist = Infinity;
    let minIndex = -1;

    for (let i = 0; i < dist.length; ++i) {
        console.log('findMinDistVertex2')
        if (!visited[i] && dist[i] < minDist) {
            minDist = dist[i];
            minIndex = i;
        }
    }

    return minIndex;
};

const reconstructPath = (parents, src, dest) => {
    const path = [];
    let at = dest;
    while (at !== -1) {
        path.unshift(at);
        at = parents[at];
    }
    if (path[0] === src) {
        return path;
    }
    return [];
}; */



/* export const dijkstra_min = (matrix, n, src, target) => {
    const dist = dijkstra(matrix, n, src);

    if (dist[target] !== Infinity) {
        return dist[target];
    } else {
        return -1;
    }
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
}; */

    /* export const dijkstra_paths_= (matrix, n, src, target) => {
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
    }; */