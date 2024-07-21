"use client";

import React, { useCallback, useState } from "react";
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

import { useDispatch } from "react-redux";
import { generateEdges, generateNodes } from "@/lib/utils";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addNode, updateNodes } from "@/redux/features/flow-data-slice";

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

const nodeTypes = {
  initialNode: RootNode,
  sendText: TextNode,
  addNode: AddNode,
  sendButton: ButtonNode,
};

function Flow() {
  const n = useAppSelector((state) => state.flow.value);

  const dispatch = useDispatch<AppDispatch>();

  const initialNodes = generateNodes(n);
  const initialEdges = generateEdges(initialNodes);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // React.useEffect(() => {
  //   setNodes(n)
  // }, [n])

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nds) => {
        return applyNodeChanges(changes, nds);
      }),
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
    <div className="flex justify-center items-center h-screen w-screen bg-red-400">
      <ReactFlowProvider>
        <div className="flex justify-center items-center w-[80vw] h-[80vh] bg-red-400">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            // onNodesChange={(changes) => dispatch(updateNodes(changes))}
            // onNodesChange={(changes) => applyNodeChanges(nodes, changes)}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            style={rfStyle}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
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
