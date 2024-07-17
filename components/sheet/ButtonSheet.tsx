import React from "react";
import { FaMinus } from "react-icons/fa6";

import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import SheetHeader from "./SheetHeader";
import SheetInput from "./SheetInput";
import SheetTextArea from "./SheetTextArea";

interface ButtonSheetProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cardName: string;
  message: string;
  buttons: any
}

const ButtonSheet: React.FC<ButtonSheetProps> = ({
  type,
  setType,
  setOpen,
  cardName,
  message,
  buttons
}) => {
  return (
    <Sheet
      open={type === "button" && true}
      onOpenChange={(o) => {
        setType("");
        setOpen(false);
      }}
    >
      <SheetContent>
        <SheetHeader title="Send Message" />
        <div className="mb-8">
          <div className="my-4">
            <SheetInput label="Name *" cardName={cardName} />
          </div>
          <div>
            <SheetTextArea label="Message *" message={message} />
          </div>
          <div className="my-3">
            <Label className="text-[20px]">Button text</Label>

            {buttons.map((button: any) => (
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
  );
};

export default ButtonSheet;
