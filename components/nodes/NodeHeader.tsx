import React from "react";

interface NodeHeader {
  title: string;
}

const NodeHeader: React.FC<NodeHeader> = ({ title }) => {
  return (
      <div className="px-2 py-1 text-white">
        <p>{title}</p>
      </div>
  );
};

export default NodeHeader;
