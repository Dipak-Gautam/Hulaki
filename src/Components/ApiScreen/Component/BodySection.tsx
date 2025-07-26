import React, { useState } from "react";

const BodySection = () => {
  const [switcher, setSwitcher] = useState(true);
  return (
    <div>
      <div className="flex  my-2 gap-5">
        <div
          className={` bg-orange-500 border border-orange-500 p-1 px-3 rounded-xl text-xs font-medium text-amber-50 cursor-pointer ${
            switcher &&
            "bg-white border border-orange-600 shadow-md text-orange-500"
          }`}
          onClick={() => setSwitcher(true)}
        >
          RAW
        </div>
        <div
          className={` bg-orange-500 border border-orange-500 p-1 px-3 rounded-xl text-xs font-medium text-amber-50 cursor-pointer ${
            !switcher &&
            "bg-white border border-orange-600 shadow-md text-orange-500"
          }`}
          onClick={() => setSwitcher(false)}
        >
          Authentication
        </div>
      </div>
      {switcher ? (
        <div className="">
          <div className="text-gray-500 font-semibold">Body :</div>
          <textarea
            rows={10}
            className="w-full outline-none bg-white rounded-md border border-gray-500 h-full p-2 px-4 text-xs text-gray-600 font-medium"
          />
        </div>
      ) : (
        <div className="bg-white border border-gray-500 overflow-hidden rounded-md flex items-center">
          <div className="p-2 border-r-1 border-gray-500 w-[25%] ">
            <p className=" text-gray-800 font-semibold text-sm my-2">
              Auth Type:
            </p>
            <div className=" text-xs ">
              <p className="p-1 px-2 border border-gray-500 rounded-md bg-gray-300">
                Bearer Token
              </p>
              <p className="text-gray-500 text-[8px] px-2 my-2">
                The authorization header will be automatically generated when
                you send the request.
              </p>
            </div>
          </div>
          <div className="flex  h-full items-center  text-gray-600 text-xs font-medium p-5 gap-6  w-full">
            <div className="w-12">Token :</div>
            <input type="text" className="border  w-full p-2 text-[10px] " />
          </div>
        </div>
      )}
    </div>
  );
};

export default BodySection;
