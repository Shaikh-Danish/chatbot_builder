"use client";

import { getAcceptTypes } from "@/lib/constants";
import React from "react";

import { MdFileCopy } from "react-icons/md";
import { Label } from "./ui/label";

interface UploadFileProps {
  accept: string;
  id?: string;
}

const UploadFile: React.FC<UploadFileProps> = ({ accept, id }) => {
  const fileRef = React.useRef<HTMLInputElement | null>(null);

  accept = getAcceptTypes(accept);

  return (
    <div>
      <div>
        <Label htmlFor="upload-file" className="text-[20px] block mb-2">
          Select File
        </Label>
        <div
          onClick={() => {}}
          className="flex justify-center flex-col items-center border-[1px] border-gray-300 rounded-md p-2 py-5 cursor-pointer"
        >
          <MdFileCopy className="w-[40px] h-[40px] rounded-full p-2 bg-gray-300 mb-2" />
          <p>Choose a file or drag and drop it here</p>
          <p className="text-sm text-gray-500">100 MB max file size</p>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept={accept}
          id={id}
          className="h-0 appearance-none opacity-0"
        />
      </div>
    </div>
  );
};

export default UploadFile;
