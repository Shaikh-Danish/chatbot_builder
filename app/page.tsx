"use client";

import { useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  Background,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import RootNode from "@/components/nodes/RootNode";
import SendTextNode from "@/components/nodes/SendTextNode";
import AddNode from "@/components/nodes/AddNode";
// import TextUpdaterNode from "@/components/nodes/TextNode";

interface Edges {
  id: string;
  source: string;
  target: string;
  type: string;
}

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const nodes = [
  {
    id: "root",
    type: "initialNode",
    position: { x: -500, y: -100 },
    dragging: false,
    draggable: false,
    deletable: false,
    target: "node-2",
  },
  {
    id: "node-2",
    type: "sendText",
    targetPosition: "top",
    position: { x: -250, y: 100 },
    data: { label: "" },
  },
];

const generateEdges = (nodes: any): Edges[] => {
  const edges: Edges[] = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    const sourceId = nodes[i].target;

    for (let j = i + 1; j <= nodes.length; j++) {
      const targetId = nodes[j]?.id;

      if (sourceId === targetId) {
        edges.push({
          id: `edge-${generateRandomId()}`,
          source: nodes[i].id,
          target: targetId,
          type: "smoothstep",
        });

        break;
      }
    }
  }

  return edges;
};

const generateNodes = (nodes: any) => {
  const newNodes = [];

  for (let i = 0; i < nodes.length; i++) {
    if (!("target" in nodes[i])) {
      const randomId = `node-${generateRandomId()}`;

      nodes[i]["target"] = randomId;

      newNodes.push(nodes[i]);

      newNodes.push({
        id: randomId,
        type: "addNode",
        data: { value: 123 },
        targetPosition: "left",
        position: { x: 250, y: 138 },
      });

      continue;
    }

    newNodes.push(nodes[i]);
  }

  return newNodes;
};

const initialNodes = generateNodes(nodes);
const initialEdges = generateEdges(initialNodes);

const nodeTypes = {
  initialNode: RootNode,
  sendText: SendTextNode,
  addNode: AddNode,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="w-screen h-screen">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={rfStyle}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  let result = "";

  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default Flow;
