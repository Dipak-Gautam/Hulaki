import React from "react";

interface ResponseSectionProps {
  status: number;
  response: any;
}

const ResponseSection = ({ status, response }: ResponseSectionProps) => {
  return (
    <div className="h-full flex flex-col gap-2 my-2">
      <div className="bg-amber-700 flex   border items-center rounded-md p-1 justify-between text-sm text-gray-200 font-medium px-3">
        <div>Response</div>
        <div className="flex items-center gap-2">
          <div>Status :</div>
          <div className="bg-green-500 text-white font-medium text-xs p-0.5 px-3 rounded-lg">
            {status}
          </div>
        </div>
      </div>
      <div className="bg-white border border-slate-600 max-h-[calc(100vh-350px)] flex rounded-md flex-1 ">
        <pre className="text-[10px] text-gray-800 overflow-auto flex-1 w-full p-3 ">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ResponseSection;
