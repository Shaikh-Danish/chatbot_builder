"use client";

import React, { useState } from "react";

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

import { MdOutlineWrapText, MdOutlineRadioButtonChecked } from "react-icons/md";
import { RxButton } from "react-icons/rx";

interface MessageTypesProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const messageTypes: {
  type: string;
  icons: React.ReactNode;
  title: string;
}[] = [
  {
    type: "text",
    icons: <MdOutlineWrapText />,
    title: "Send Text",
  },
  {
    type: "button",
    icons: <RxButton />,
    title: "Send Simple",
  },
  {
    type: "radio",
    icons: <MdOutlineRadioButtonChecked />,
    title: "Send Radio",
  },
];

const MessageTypes: React.FC<MessageTypesProps> = ({ type, setType }) => {
  const handleClick = (e: any) => {
    const { target } = e;

    const type = target
      .closest(".message-container")
      ?.getAttribute("data-type");

    setType(type);
  };

  return (
    <div className="flex gap-7 mt-4" onClick={handleClick}>
      {messageTypes.map((messageType) => {
        return (
          <div
            className="message-container flex justify-center items-center flex-col cursor-pointer"
            data-type={messageType.type}
          >
            <div className="border-[1px] border-gray-500 border-solid rounded-md text-2xl p-5 text-gray-700">
              {messageType.icons}
            </div>
            <p className="mt-2 text-gray-500">{messageType.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageTypes;
