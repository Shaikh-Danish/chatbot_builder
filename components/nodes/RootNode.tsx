import React from "react";

import { Handle, Position } from "@xyflow/react";

const RootNode: React.FC<{ isConnectable: any }> = ({ isConnectable }) => {
  return (
    <div className="flex bg-black text-white w-fit py-2 px-5 rounded-sm">
      <p className="rounded-md">Start</p>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default RootNode;
