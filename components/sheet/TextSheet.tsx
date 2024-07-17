import React from "react";

import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import SheetHeader from "./SheetHeader";
import SheetInput from "./SheetInput";
import SheetTextArea from "./SheetTextArea";

interface TextSheetProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cardName: string;
  message: string;
}

const TextSheet: React.FC<TextSheetProps> = ({
  type,
  setType,
  setOpen,
  cardName,
  message,
}) => {
  return (
    <Sheet
      open={type === "text" && true}
      onOpenChange={(o) => {
        setType("");
        setOpen(o);
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

export default TextSheet;
