import React from "react";

import { Label } from "@/components/ui/label";

const SheetInput: React.FC<{ cardName: string; label: string }> = ({
  cardName,
  label,
}) => {
  return (
    <div className="my-4">
      <Label htmlFor="cardName" className="text-[20px]">
        {label}
      </Label>
      <br />
      <input
        id="cardName"
        placeholder="Card Name"
        value={cardName}
        className="w-[100%] p-2 mt-2 border-[1px] border-gray-500 border-solid rounded-md focus:outline-0"
      />
    </div>
  );
};

export default SheetInput;
