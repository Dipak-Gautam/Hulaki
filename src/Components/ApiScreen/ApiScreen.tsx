import React from "react";
import SendButton from "../Button/SendButton";
import BodySection from "./Component/BodySection";

const ApiScreen = () => {
  return (
    <div className="flex flex-1 p-5 flex-col ">
      <div className="flex gap-2">
        <div className="border overflow-hidden rounded-lg flex items-center flex-1">
          <div className="bg-sky-100 p-1 px-3">
            <select name="" id="" className="outline-none">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
              <option value="PUT">PUT</option>
            </select>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter URL or describer the request to post "
              className=" w-full px-3 text-sm outline-none placeholder:text-gray-600 placeholder:font-medium "
            />
          </div>
        </div>
        <SendButton onClick={() => console.log("hello")} />
      </div>
      <BodySection />
    </div>
  );
};

export default ApiScreen;
