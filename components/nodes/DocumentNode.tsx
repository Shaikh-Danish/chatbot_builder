"use client";

import React, { useState } from "react";

const DocumentNode = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return <div></div>;
};

export default DocumentNode;
