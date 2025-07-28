import React, { useRef, useState } from "react";
import SendButton from "../Button/SendButton";
import BodySection from "./Component/BodySection";
import ResponseSection from "./Component/ResponseSection";
import SecureFetch from "../ApiConfig/SecureFetch";

const ApiScreen = () => {
  const methodRef = useRef<HTMLSelectElement>(null);

  const urlRef = useRef<HTMLInputElement>(null);
  const [body, setBody] = useState("");
  const [token, setToken] = useState("");
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(200);

  const handelSubmit = async () => {
    if (!urlRef.current || !methodRef.current) return;
    const request = await SecureFetch({
      method: methodRef.current.value,
      url: urlRef.current.value,
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setStatus(request.status);
    const response = await request.json();
    setResponse(response);
  };

  return (
    <div className="flex flex-1 p-5 flex-col h-full  ">
      <div className="flex gap-2">
        <div className="border overflow-hidden rounded-lg flex items-center flex-1">
          <div className="bg-sky-100 p-1 px-3">
            <select
              className="outline-none"
              ref={methodRef}
              defaultValue={"GET"}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
              <option value="PUT">PUT</option>
            </select>
          </div>
          <div className="flex-1">
            <input
              ref={urlRef}
              type="text"
              placeholder="Enter URL or describer the request to post "
              className=" w-full px-3 text-sm outline-none placeholder:text-gray-600 placeholder:font-medium "
            />
          </div>
        </div>
        <SendButton onClick={() => handelSubmit()} />
      </div>
      <BodySection
        body={body}
        token={token}
        setBody={setBody}
        setToken={setToken}
      />
      <ResponseSection status={status} response={response} />
    </div>
  );
};

export default ApiScreen;
