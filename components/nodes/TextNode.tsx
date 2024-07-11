"use client";

import { useCallback } from "react";

import { Handle, Position } from "@xyflow/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const handleStyle = { left: 10 };

function TextUpdaterNode({
  data,
  isConnectable,
}: {
  data: any;
  isConnectable: any;
}) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <Card className="w-[150px] p-0">
          <CardContent className="p-0">
            <form>
              <div className="">
                <div className="">
                  <Label htmlFor="name">Name</Label>
                  {/* <Input id="name" placeholder="Name of your project" className="w-[100%] p-0 m-0" /> */}
                  <input type="text" id="name" placeholder="name of your project" className="w-[100%] p-0 m-0" />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
