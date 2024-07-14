import React from "react";

import { Label } from "@/components/ui/label";

const SheetInput: React.FC<{ title: string; label: string }> = ({
  title,
  label,
}) => {
  return (
    <div className="my-4">
      <Label htmlFor="message" className="text-[20px]">
        {label}
      </Label>
      <br />
      <input
        id="message"
        placeholder="Card Name"
        value={title}
        className="w-[100%] p-2 mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
      />
    </div>
  );
};

export default SheetInput;
