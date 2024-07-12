import React from "react";

import { Handle, Position, NodeProps } from "@xyflow/react";

import NodeHeader from "./NodeHeader";

interface TextNodeProps {
  isConnectable: boolean;
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    title: string;
    message: string;
  };
}

const TextNode = (props: NodeProps<TextNodeProps>) => {
  return (
    <div className="text-node w-[300px] bg-gray-700 text-white p-[2px] rounded-md cursor-pointer hover:bg-green-500">
      <NodeHeader title={props.data.title} />

      <div className="text-black bg-white px-2 py-5 rounded-sm">
        <p>{props.data.message}</p>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        isConnectable={props.isConnectable}
      />

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={props.isConnectable}
      />
    </div>
  );
};

export default TextNode;
