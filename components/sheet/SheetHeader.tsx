import React from "react";

import { SheetHeader as Header, SheetTitle } from "@/components/ui/sheet";

const SheetHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Header>
      <SheetTitle>{title}</SheetTitle>
    </Header>
  );
};

export default SheetHeader;
