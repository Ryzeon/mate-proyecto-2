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

export const dijkstra = (matrix, start, end, setDistanceMin, setPathMin, handlegraph_dj) => {
    console.log("-");
    console.log('matrix: ', matrix)
    console.log('cantidad de nodos: ', matrix.length)
    console.log('nodo de inicio: ', start)
    console.log('nodo de destino: ', end)
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

    console.log('distances: ', distances);
    setDistanceMin(distances[end]);
    setPathMin(path);
    handlegraph_dj.handle(path);
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