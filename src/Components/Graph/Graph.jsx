import ReactFlow, {
    MiniMap,
    Controls,
    useNodesState,
    useEdgesState, useReactFlow, Position, addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import './Graph.css';
import {useCallback, useEffect} from "react";
import dagre from 'dagre';
import FutureCallback from '../../validations/callback'

const createInitialNodes = (matriz, size) => {
    const nodes = [];
    // Calculamos la posición de cada nodo para que se vea bien
    const nodePositions = [];
    const nodePositionsX = [];
    const nodePositionsY = [];
    nodePositionsX.push(0);
    nodePositionsY.push(0);
    for (let i = 0; i < size; ++i) {
        // Posición en X o Y deben estar no tan lejos del anterior
        // y no tan cerca del anterior
        const postX = Math.floor(Math.random() * (100 - 50) + 50);
        const postY = Math.floor(Math.random() * (100 - 50) + 50);
        nodePositionsX.push(postX);
        nodePositionsY.push(postY);
        nodes.push({
            id: i.toString(), data: {label: i + 1}, position: {
                x: postX,
                y: postY
            },
            zIndex: 2
        });
    }
    //console.log(nodes);
    return nodes;
}
const createEdges = (matriz, size) => {
//     Si no es 0, entonces hay una arista y se pone en label el valor el cual es la distancia
    const edges = [];
    const alreadyConnected = [];
    for (let i = 0; i < size; ++i) {

        for (let j = 0; j < size; ++j) {
            if (alreadyConnected.includes(j + "-" + i) || alreadyConnected.includes(i + "-" + j)) {
                continue;
            }
            if (matriz[i][j] !== 0) {
                edges.push({
                    id: i + "-" + j,
                    source: i.toString(),
                    target: j.toString(),
                    label: matriz[i][j].toString() + "m",
                    animated: true,
                    zIndex: 1
                });
                alreadyConnected.push(i + "-" + j);
            }
        }
    }
    console.log(edges);
    return edges;
}

const getLayoutedElements = (nodes, edges) => {
    const dagreGraph = new dagre.graphlib.Graph();
    const nodeWidth = 200;
    const nodeHeight = 60;
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({rankdir: "LR"});

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {width: nodeWidth, height: nodeHeight});
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = Position.Left
        node.sourcePosition = Position.Right

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    return {nodes, edges};
};


const initialNodes = [];
// const initialEdges = [{id: "e1-2", source: "1", target: "2", label: "20m"}];
const initialEdges = [];


export const Graph = ({matrix, size, FutureCallback, handlejistrackCB}) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    // useEffect(() => {
    //     const newNodes = createInitialNodes(matrix, size);
    //     setNodes(newNodes);
    //     const newEdges = createEdges(matrix, size);
    //     setEdges(newEdges);
    // });

    let lastCalledTimeLong = 0;

    FutureCallback.onSuccess((matrix) => {
        if (lastCalledTimeLong && ((lastCalledTimeLong + 200) > Date.now())) {
            return;
        }
        console.log("matrixChange event received");
        try {
            const newMatrix = matrix;
            console.log(newMatrix.length);
            const newSize = newMatrix.length;
            const newNodes = createInitialNodes(newMatrix, newSize);
            const newEdges = createEdges(newMatrix, newSize);
            let layoutedElements = getLayoutedElements(newNodes, newEdges);
            setNodes(layoutedElements.nodes);
            setEdges(layoutedElements.edges);
            lastCalledTimeLong = Date.now();
        } catch (e) {
            console.log(e);
        }
    });

    handlejistrackCB.onSuccess((dijkstraSrc, dijkstraDst, out_matriz) => {
    });

    return (
        <section className="graph_container">
            <div className="graph_container__content">
                <ReactFlow nodes={nodes} edges={edges}
                        onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} defaultZoom={1.5}
                        onConnect={onConnect} fitView={true}
                >
                    <Controls/>
                    {/*<MiniMap/> */}
                </ReactFlow>
            </div>

        </section>

    )
}