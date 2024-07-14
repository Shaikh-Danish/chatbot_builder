"use client";

import React, { useState } from "react";

import { Handle, Position, NodeProps } from "@xyflow/react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { FaMinus } from "react-icons/fa6";

import NodeHeader from "./NodeHeader";
import SheetHeader from "../sheet/SheetHeader";
import SheetInput from "../sheet/SheetInput";
import SheetTextArea from "../sheet/SheetTextArea";

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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="text-node w-[300px] bg-gray-700 text-gray-500 p-[2px] rounded-md cursor-pointer hover:bg-green-500"
        onClick={handleClick}
      >
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
                  style={{ top: 79 + (i + 1) * 41 }}
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

      {open && (
        <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
          <SheetContent>
            <SheetHeader title={props.data.title} />

            <div className="mb-8">
              <SheetInput title={props.data.title} label="Name *" />
              <SheetTextArea
                title={props.data.title}
                label="Message *"
                message={props.data.message}
              />
              <div className="my-3">
                <Label className="text-[20px]">Button text</Label>

                {props.data.buttons.map((button) => (
                  <>
                    <br />
                    <input
                      type="text"
                      value={button.title}
                      className="w-[80%] p-2 mt-3 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                    />
                    <button className="ml-3 p-1.5 bg-red-500 rounded-full">
                      <FaMinus className="text-white" />
                    </button>
                  </>
                ))}
              </div>
            </div>
            <SheetFooter>
              <div className="flex justify-start gap-5 w-[100%]">
                <Button
                  variant="outline"
                  className="w-[120px] border-[1px] border-gray-500 border-solid rounded-md"
                >
                  Cancel
                </Button>
                <Button className="w-[120px]">Save</Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default ButtonNode;
