import React from "react";

interface NodeHeader {
  title: string;
  children?: React.ReactNode;
}

const NodeHeader: React.FC<NodeHeader> = ({ title, children }) => {
  return (
    
    <div className="w-[300px] bg-gray-700 text-white p-[2px] rounded-md cursor-pointer hover:bg-green-500">
      <div className="px-2 py-1">
        <p>{title}</p>
      </div>
      <div className="text-black bg-white p-2 rounded-sm">
        {children}
      </div>
    </div>
  );
};

export default NodeHeader;
