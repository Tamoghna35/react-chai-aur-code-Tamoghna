import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-md px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className=" px-3 py-2 rounded-2xl bg-red-300"
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" px-3 py-2 rounded-2xl bg-blue-300"
          >
            blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" px-3 py-2 rounded-2xl bg-yellow-300"
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
