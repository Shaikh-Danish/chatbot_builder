import React from "react";

import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import SheetHeader from "./SheetHeader";
import SheetInput from "./SheetInput";
import SheetTextArea from "./SheetTextArea";

interface DocumentSheetProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cardName: string;
  caption?: string;
  fileName?: string;
}

const DocumentSheet: React.FC<DocumentSheetProps> = ({
  type,
  setType,
  setOpen,
  cardName,
  caption,
  fileName
}) => {
  return (
    <Sheet
      open={type === "document" && true}
      onOpenChange={(o) => {
        setType("");
        setOpen(o);
      }}
    >
      <SheetContent>
        <SheetHeader title="Send Document" />

        <div className="mb-8">
          <div className="my-4">
            <SheetInput label="Name *" cardName={cardName} />
          </div>
          <div className="my-4">
            <SheetTextArea label="Caption" message={caption as string}  />
          </div>
          <div className="my-4">
            <SheetInput label="File Name" cardName={fileName as string} />
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

export default DocumentSheet;
