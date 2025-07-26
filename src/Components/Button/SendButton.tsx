import React, { type ComponentProps } from "react";

interface SendButtonProp extends ComponentProps<"div"> {}

const SendButton = ({ ...props }: SendButtonProp) => {
  return (
    <div
      className="text-sm font-semibold text-white p-1 px-3 bg-blue-500 rounded-md text-center w-20 hover:bg-blue-600 hover:shadow-md cursor-pointer "
      {...props}
    >
      send
    </div>
  );
};

export default SendButton;
