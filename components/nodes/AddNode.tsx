"use client";

import React, { useState, useEffect } from "react";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import MessageTypes from "@/components/MessageTypes";

import TextSheet from "@/components/sheet/TextSheet";
import DocumentSheet from "@/components/sheet/DocumentSheet";
import ButtonSheet from "@/components/sheet/ButtonSheet";

interface AddNodeProps {
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

const AddNode = (props: NodeProps<AddNodeProps>) => {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (type !== "") {
      setOpen(false);
    }
  }, [type]);

  return (
    <>
      <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
        <SheetTrigger asChild>
          <div
            className="bg-white p-1 rounded-sm cursor-pointer hover:text-green-500 hover:bg-black"
            onClick={() => setOpen(!open)}
          >
            <IoIosAddCircle />
            <Handle
              type="target"
              position={Position.Left}
              isConnectable={props.isConnectable}
            />
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Send Message</SheetTitle>
            <SheetDescription>Messages that will be sent to Recipient</SheetDescription>
          </SheetHeader>

          <MessageTypes type={type} setType={setType} />
        </SheetContent>
      </Sheet>
      
      {type === "text" && (
        <TextSheet
          type={type}
          setOpen={setOpen}
          setType={setType}
          cardName="Message Card"
          message="write your message"
        />
      )}

      {type === "button" && (
        <ButtonSheet
          type={type}
          setOpen={setOpen}
          setType={setType}
          message="Type a message"
          cardName="Button Card"
          buttons={["Button 1", "Button 2", "Button 3"]}
        />
      )}

      {type === "radio" && (
        <div className="overflow-scroll w-[100vh]">
          <ButtonSheet
            type={type}
            setOpen={setOpen}
            setType={setType}
            message="Type a message"
            cardName="Radio Card"
            buttons={[
              "Button 1",
              "Button 2",
              "Button 3",
              "Button 4",
              "Button 5",
              "Button 6",
              "Button 7",
              "Button 8",
              "Button 9",
              "Button 10",
            ]}
          />
        </div>
      )}

      {type === "document" && (
        <DocumentSheet
          type={type}
          setType={setType}
          setOpen={setOpen}
          cardName="Send Document"
          caption="Write a Caption"
          fileName="Give a name to your file"
        />
      )}
    </>
  );
};

export default AddNode;
