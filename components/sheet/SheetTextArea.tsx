import React from "react";

import { Label } from "@/components/ui/label";

const SheetTextArea: React.FC<{
  title: string;
  label: string;
  message: string;
}> = ({ title, label, message }) => {
  return (
    <div className="my-4">
      <Label htmlFor="message" className="text-[20px]">
        {label}
      </Label>
      <br />
      <textarea
        value={message}
        placeholder="Type your message here."
        className="w-[100%] p-2 h-[100px] mt-2 border-[1px] border-gray-500 border-solid rounded-md"
      />
    </div>
  );
};

export default SheetTextArea;
