import React from "react";

import { Handle, Position } from "@xyflow/react";

import NodeHeader from "./NodeHeader";

interface SendTextNodeProps {
  isConnectable: boolean;
}

const SendTextNode: React.FC<SendTextNodeProps> = ({ isConnectable }) => {
  return (
    <div className="w-[]">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <NodeHeader title="Welcome">
        <div className="">
          <p>Hello create your own chatbot without code.</p>
        </div>
      </NodeHeader>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default SendTextNode;
