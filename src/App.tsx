import React from "react";
import Recent from "./Components/Recent/Recent";
import ApiScreen from "./Components/ApiScreen/ApiScreen";
import ResponseSection from "./Components/ApiScreen/Component/ResponseSection";

const App = () => {
  return (
    <div className="flex  h-[100vh] bg-sky-50">
      <Recent />
      <ApiScreen />
    </div>
  );
};

export default App;
