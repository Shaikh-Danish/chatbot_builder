import React from "react";

import { Handle, Position, NodeProps } from "@xyflow/react";

import NodeHeader from "./NodeHeader";

const handleStyle = { top: 10 };

interface ButtonNodeProps {
  isConnectable: boolean;
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    title: string;
    message: string;
    buttons: { title: string; id: string }[];
  };
}

const ButtonNode = (props: NodeProps<ButtonNodeProps>) => {
  return (
    <div className="text-node w-[300px] bg-gray-700 text-gray-500 p-[2px] rounded-md cursor-pointer hover:bg-green-500">
      <NodeHeader title={props.data.title} />

      <div className=" bg-white px-2 py-5 rounded-t-md">
        <p>{props.data.message}</p>
      </div>

      <div className="bg-white rounded-b-md">
        {props.data.buttons.map((button, i) => {
          return (
            <div className="p-2 border-t-[1px] border-gray-400">
              <Handle
                type="source"
                position={Position.Right}
                isConnectable={props.isConnectable}
                id={button.id + "-a"}
                style={{ top: 79 + (i+1) * 41}}
              />
              {button.title}
            </div>
          );
        })}
      </div>

      <Handle
        type="target"
        position={Position.Left}
        isConnectable={props.isConnectable}
      />
    </div>
  );
};

export default ButtonNode;
