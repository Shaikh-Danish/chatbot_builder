"use client";

import React, { useState, useEffect } from "react";

import { Handle, Position } from "@xyflow/react";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import MessageTypes from "../MessageTypes";

const AddNode: React.FC<{ isConnectable: any }> = ({ isConnectable }) => {
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
              isConnectable={isConnectable}
            />
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Select Message Type</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <MessageTypes type={type} setType={setType} />
        </SheetContent>
      </Sheet>

      {type === "text" && (
        <>
          <Sheet
            open={type === "text" && true}
            onOpenChange={(o) => {
              setType("");
              setOpen(false);
            }}
          >
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Send Message</SheetTitle>
              </SheetHeader>
              <div className="mb-8">
                <div className="my-4">
                  <Label htmlFor="message" className="text-[20px]">
                    Name *
                  </Label>
                  <br />
                  <input
                    id="message"
                    placeholder="Card Name"
                    value="Message Card"
                    className="w-[100%] p-2 mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[20px]">
                    Message *
                  </Label>
                  <br />
                  <textarea
                    placeholder="Type your message here."
                    className="w-[100%] p-2 h-[100px] mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                  />
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
        </>
      )}

      {type === "button" && (
        <>
          <Sheet
            open={type === "button" && true}
            onOpenChange={(o) => {
              setType("");
              setOpen(false);
            }}
          >
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Send Message</SheetTitle>
              </SheetHeader>
              <div className="mb-8">
                <div className="my-4">
                  <Label htmlFor="message" className="text-[20px]">
                    Name *
                  </Label>
                  <br />
                  <input
                    id="message"
                    placeholder="Card Name"
                    value="Message Card"
                    className="w-[100%] p-2 mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[20px]">
                    Message *
                  </Label>
                  <textarea
                    placeholder="Type your message here."
                    className="w-[100%] p-2 h-[100px] mt-2 border-[1px] border-gray-500 border-solid rounded-md"
                  />
                </div>
                <div className="my-3">
                  <Label className="text-[20px]">Button text</Label>

                  {["button1", "button2", "button3"].map((button) => (
                    <>
                      <br />
                      <input
                        type="text"
                        value={button}
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
        </>
      )}

      {type === "radio" && (
        <div className="overflow-scroll w-[100vh]">
          <Sheet
            open={type === "radio" && true}
            onOpenChange={(o) => {
              setType("");
              setOpen(false);
            }}
          >
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Send Message</SheetTitle>
              </SheetHeader>
              <div className="">
                <div className="mb-4">
                  <Label htmlFor="message" className="text-[20px]">
                    Name *
                  </Label>
                  <br />
                  <input
                    id="message"
                    placeholder="Card Name"
                    value="Message Card"
                    className="w-[100%] p-2 mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message" className="text-[20px]">
                    Message *
                  </Label>
                  <textarea
                    placeholder="Type your message here."
                    className="w-[100%] p-2 h-[100px] mt-2 border-[1px] border-gray-500 border-solid rounded-md"
                  />
                </div>
                <div className="mb-6">
                  <Label className="text-[20px]">Button text</Label>
                  <div className="overflow-scroll h-[46vh] mt-4">
                    {[
                      "button1",
                      "button2",
                      "button3",
                      "button4",
                      "button5",
                      "button6",
                      "button7",
                      "button8",
                      "button9",
                      "button10",
                    ].map((button) => (
                      <>
                        <input
                          type="text"
                          value={button}
                          className="w-[80%] mt-3 p-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
                        />
                        <button className="ml-3 p-1.5 bg-red-500 rounded-full">
                          <FaMinus className="text-white" />
                        </button>
                      </>
                    ))}
                  </div>
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
        </div>
      )}
    </>
  );
};

export default AddNode;
