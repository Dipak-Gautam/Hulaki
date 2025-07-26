import React from "react";

const ResponseSection = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="bg-amber-700 flex   border items-center rounded-md p-1 justify-between text-sm text-gray-200 font-medium px-3">
        <div>Response</div>
        <div className="flex items-center gap-2">
          <div>Status :</div>
          <div className="bg-green-500 text-white font-medium text-xs p-0.5 px-3 rounded-lg">
            200
          </div>
        </div>
      </div>
      <div className="bg-white border border-slate-600 overflow-auto flex rounded-md flex-1"></div>
    </div>
  );
};

export default ResponseSection;
