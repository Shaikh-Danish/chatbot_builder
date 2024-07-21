import React from "react";

import { MdOutlineWrapText, MdOutlineRadioButtonChecked, MdCallToAction } from "react-icons/md";
import { RxButton } from "react-icons/rx";
import { IoLocationSharp, IoDocumentAttachSharp } from "react-icons/io5";

interface MessageTypesProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const messageTypes: {
  type: string;
  icons: React.ReactNode;
  title: string;
}[] = [
  {
    type: "text",
    icons: <MdOutlineWrapText />,
    title: "Send Text",
  },
  {
    type: "button",
    icons: <RxButton />,
    title: "Send Simple",
  },
  {
    type: "radio",
    icons: <MdOutlineRadioButtonChecked />,
    title: "Send Radio",
  },
  {
    type: "document",
    icons: <IoDocumentAttachSharp />,
    title: "Send Document",
  },
  // {
  //   type: "location",
  //   icons: <IoLocationSharp />,
  //   title: "Send Location",
  // },
  // {
  //   type: "call-to-action",
  //   icons: <MdCallToAction />,
  //   title: "Call to Action",
  // },
];

const MessageTypes: React.FC<MessageTypesProps> = ({ type, setType }) => {
  const handleClick = (e: any) => {
    const { target } = e;

    const type = target
      .closest(".message-container")
      ?.getAttribute("data-type");

    setType(type);
  };

  return (
    <div className="grid grid-cols-3 justify-center items-center gap-4 mt-4 text-center" onClick={handleClick}>
      {messageTypes.map((messageType) => {
        return (
          <div
            className="message-container w-[100px] mt-2 cursor-pointer flex items-center flex-col"
            data-type={messageType.type}
          >
            <div className="border-[1px] border-gray-500 border-solid rounded-md text-2xl p-5 text-gray-700">
              {messageType.icons}
            </div>
            <p className="mt-2 text-gray-500">{messageType.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageTypes;
