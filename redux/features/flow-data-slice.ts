import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FlowState = {
  value: {
    id: string;
    parentId?: string | null | undefined;
    type: string;
    position: {
      x: number;
      y: number;
    };
    targetPosition?: string;
    target?: string;
    data: Record<string, any>;
    dragging?: boolean;
    draggable?: boolean;
    deletable?: boolean;
  }[];
};

const initialState: any = {
  value: [
    {
      id: "root",
      type: "initialNode",
      data: {},
      position: { x: -500, y: -100 },
      dragging: false,
      draggable: false,
      deletable: false,
      target: "node-2",
    },
    // {
    //   id: "node-2",
    //   type: "sendButton",
    //   targetPosition: "top",
    //   position: { x: -250, y: 100 },
    //   data: {
    //     title: "Button Card",
    //     message: "Create Chatbots without code.",
    //     type: "simple-button",
    //     buttons: [
    //       { title: "button1", id: "button-1" },
    //       { title: "button2", id: "button-2" },
    //       { title: "button3", id: "button-3" },
    //     ],
    //   },
    // },
    {
      id: "node-2",
      type: "sendText",
      targetPosition: "top",
      position: { x: -250, y: 100 },
      data: {
        title: "Welcome Card",
        message: "Create Chatbots without code.",
        type: "text",
      },
    },
  ],
};

export const flowData = createSlice({
  name: "flow-data",
  initialState,
  reducers: {
    addNode: (state) => {
      console.log(state.value, "state")
      state.value.push({
        id: "",
        data: {},
        position: {x: 300, y: 300},
        type: "",
      })
    },
    updateNodes: (state, payload) => {
      console.log(state.value, "state")
      // return payload.payload;
    },
  },
});

export const { addNode, updateNodes } = flowData.actions;

export default flowData.reducer;
