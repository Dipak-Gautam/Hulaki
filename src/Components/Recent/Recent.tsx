import React from "react";
import RecentApi from "./RecentApi";

const Recent = () => {
  return (
    <div className="w-[20%] bg-amber-600">
      <div className="p-2 px-3 flex gap-5 items-center">
        <div>
          <img src="./postman.png" alt="" className="w-10" />
        </div>
        <div className="text-white font-bold text-xl leading-4">
          <div className="m-0 p-0">Hulaki</div>
          <div className="text-[7px] m-0 p-0 font-medium">Dipak Gautam</div>
        </div>
      </div>
      <div className=" border-b m border-white"></div>
      <RecentApi />
    </div>
  );
};

export default Recent;
