import React from "react";
import { FaMinus } from "react-icons/fa6";

import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import SheetHeader from "./SheetHeader";
import SheetInput from "./SheetInput";
import SheetTextArea from "./SheetTextArea";
import UploadFile from "../UploadFile";
import SelectExtension from "../SelectExtension";

interface ButtonSheetProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cardName: string;
  message: string;
  buttons: any;
}

const ButtonSheet: React.FC<ButtonSheetProps> = ({
  type,
  setType,
  setOpen,
  cardName,
  message,
  buttons,
}) => {
  return (
    <div className="bg-red-400 overflow-scroll h-[90vh]">
      <Sheet
        open={type === "button" || (type === "radio" && true)}
        onOpenChange={(o) => {
          setType("");
          setOpen(false);
        }}
      >
        <SheetContent className="overflow-scroll h-[100vh]">
          <SheetHeader title="Send Message" />
          <div className="mb-6">
            <div className="my-4">
              <SheetInput label="Name *" cardName={cardName} />
            </div>
            <div>
              <SheetTextArea label="Message *" message={message} />
            </div>
            {type === "button" && (
              <>
                <div>
                  <SelectExtension type="all" />
                </div>
                <div>
                  <div className="my-4">
                    <UploadFile accept="all" id="upload-file" />
                  </div>
                </div>
              </>
            )}
            <div className="">
              <Label className="text-[20px]">Button text</Label>
              <div className="my-1">
                {buttons.map((button: any) => (
                  <>
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
  );
};

export default ButtonSheet;
