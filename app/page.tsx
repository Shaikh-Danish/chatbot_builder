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
import AddNode from "@/components/nodes/AddNode";
import TextNode from "@/components/nodes/TextNode";
import ButtonNode from "@/components/nodes/ButtonNode";

interface Edges {
  id: string;
  source: string;
  target: string;
  type: string;
  sourceHandle?: string;
  animated?: true;
}

const rfStyle = {
  backgroundColor: "#FFFFFF",
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
  // {
  //   id: "node-2",
  //   type: "sendButton",
  //   targetPosition: "top",
  //   position: { x: -250, y: 100 },
  //   data: {
  //     title: "Button Card",
  //     message: "Create Chatbots without code.",
  //     type: "simple-button",
  //     buttons: [
  //       { title: "button1", id: "button-1" },
  //       { title: "button2", id: "button-2" },
  //       { title: "button3", id: "button-3" },
  //     ],
  //   },
  // },
  // {
  //   id: "node-2",
  //   type: "sendText",
  //   targetPosition: "top",
  //   position: { x: -250, y: 100 },
  //   data: { title: "Welcome Card", message: "Create Chatbots without code.", type: "text" },
  // },
];

const generateEdges = (nodes: any): Edges[] => {
  const edges: Edges[] = [];

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].type === "sendButton") {
      const node = nodes[i];

      node.data.buttons.forEach((button: any) => {
        edges.push({
          id: `edge-${generateRandomId()}`,
          source: node.id,
          target: button.id,
          type: "smoothstep",
          sourceHandle: button.id + "-a",
        });
      });

      continue;
    }

    const sourceId = nodes[i].target;

    for (let j = i + 1; j <= nodes.length - 1; j++) {
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

  if (nodes.length === 1) {
    const randomId = `node-${generateRandomId()}`;

    nodes[0]["target"] = randomId;
    newNodes.push(nodes[0]);

    newNodes.push({
      id: randomId,
      type: "addNode",
      targetPosition: "left",
      position: { x: 0, y: 100 },
    });

    return newNodes;
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    if (node.type === "sendButton" || node.type === "sendRadio") {
      const randomId = `node-${generateRandomId()}`;

      nodes[i]["target"] = randomId;

      newNodes.push(nodes[i]);

      let x = nodes[i].position.x + 600;
      let y = nodes[i].position.y - 70;

      node.data.buttons.forEach((button: any) => {
        newNodes.push({
          pid: randomId,
          cardType: "button",
          id: button.id,
          type: "addNode",
          targetPosition: "left",
          position: { x, y },
        });

        y += 150;
      });

      continue;
    } else if (!("target" in nodes[i])) {
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
  sendText: TextNode,
  addNode: AddNode,
  sendButton: ButtonNode,
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
