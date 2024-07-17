import React from "react";

import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import SheetHeader from "./SheetHeader";
import SheetInput from "./SheetInput";
import SheetTextArea from "./SheetTextArea";
import { Label } from "@radix-ui/react-select";

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
  fileName,
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
            <SheetTextArea label="Caption" message={caption as string} />
          </div>
          <div className="my-4">
            <SheetInput label="File Name" cardName={fileName as string} />
          </div>
          <div className="mt-2">
            <div>
              <label className="text-[20px] font-medium">
                Select File Type *
              </label>
              <Select>
                <SelectTrigger
                  id="file-type"
                  className="w-[100%] p-2 py-5 text-md bg-white mt-3 border-[1px] border-gray-500 outline-none"
                >
                  <SelectValue placeholder="Select File Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="w-[100%] rounded-md p-1 border-[1px] border-gray-500">
                    <SelectLabel>Select File Type</SelectLabel>
                    <SelectItem className="cursor-pointer" value="txt">
                      .txt
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="pdf">
                      .pdf
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="xls">
                      .xls
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="xlsx">
                      .xlsx
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="doc">
                      .doc
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="docx">
                      .docs
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="ppt">
                      .ppt
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="pptx">
                      .pptx
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
  );
};

export default DocumentSheet;
