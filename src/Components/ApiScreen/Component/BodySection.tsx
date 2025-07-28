import React, { useState } from "react";

interface BodySectionProps {
  body: string;
  token: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const BodySection = ({ body, token, setBody, setToken }: BodySectionProps) => {
  const [switcher, setSwitcher] = useState(true);
  const [jsonError, setJsonError] = useState<string | null>(null);

  // Validate JSON on body change
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setBody(value);

    try {
      JSON.parse(value);
      setJsonError(null);
    } catch (err) {
      setJsonError("Invalid JSON format");
    }
  };

  const beautifyJSON = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(body), null, 2);
      setBody(formatted);
    } catch {
      setJsonError("Cannot beautify invalid JSON");
    }
  };

  return (
    <div>
      <div className="flex my-2 gap-5">
        <div
          className={`bg-orange-500 border border-orange-500 p-1 px-3 rounded-xl text-xs font-medium text-amber-50 cursor-pointer ${
            switcher &&
            "bg-white border border-orange-600 shadow-md text-orange-500"
          }`}
          onClick={() => setSwitcher(true)}
        >
          RAW
        </div>
        <div
          className={`bg-orange-500 border border-orange-500 p-1 px-3 rounded-xl text-xs font-medium text-amber-50 cursor-pointer ${
            !switcher &&
            "bg-white border border-orange-600 shadow-md text-orange-500"
          }`}
          onClick={() => setSwitcher(false)}
        >
          Authentication
        </div>
      </div>

      {switcher ? (
        <div>
          <div className="text-gray-500 font-semibold flex justify-between items-center">
            <span>Body :</span>
            <button
              onClick={beautifyJSON}
              className="text-xs text-blue-500 underline"
            >
              Beautify JSON
            </button>
          </div>
          <textarea
            value={body}
            onChange={handleBodyChange}
            rows={8}
            className="w-full outline-none bg-white rounded-md border border-gray-500 h-full p-2 px-4 text-[10px] text-gray-700 "
          />
          {jsonError && (
            <div className="text-red-500 text-xs mt-1">{jsonError}</div>
          )}
        </div>
      ) : (
        <div className="bg-white border border-gray-500 overflow-hidden rounded-md flex items-center">
          <div className="p-2 border-r border-gray-500 w-[25%] ">
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
            <input
              type="text"
              className="border w-full p-2 text-[10px]"
              placeholder="Enter your token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BodySection;
