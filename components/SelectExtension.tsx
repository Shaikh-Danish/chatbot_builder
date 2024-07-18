import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DOCUMENT_TYPES, IMAGE_TYPES, VIDEO_TYPES } from "@/lib/constants";

interface SelectExtensionProps {
  type: string;
}

const SelectExtension: React.FC<SelectExtensionProps> = ({ type }) => {
  return (
    <>
      <label className="text-[20px] font-medium">Select File Type</label>
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
            {type === "document" && (
              <>
                {DOCUMENT_TYPES.map((ext) => (
                  <SelectItem className="cursor-pointer" value={ext}>
                    {ext}
                  </SelectItem>
                ))}
              </>
            )}

            {type === "image" && (
              <>
                {IMAGE_TYPES.map((ext) => (
                  <SelectItem className="cursor-pointer" value={ext}>
                    {ext}
                  </SelectItem>
                ))}
              </>
            )}

            {type === "video" && (
              <>
                {VIDEO_TYPES.map((ext) => (
                  <SelectItem className="cursor-pointer" value={ext}>
                    {ext}
                  </SelectItem>
                ))}
              </>
            )}

            {type === "all" && (
              <>
                {[...DOCUMENT_TYPES, ...IMAGE_TYPES, ...VIDEO_TYPES].map(
                  (ext) => (
                    <SelectItem className="cursor-pointer" value={ext}>
                      {ext}
                    </SelectItem>
                  )
                )}
              </>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectExtension;
