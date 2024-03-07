import React, { useState } from "react";
function App() {
  const [val, setVal] = useState(0);
  const [elem, setElem] = useState({ name: "Shlok", isBanned: false });
  return (
    <div>
      <h1>{val}</h1>
      <button
        className="bg-green-400 rounded-md p-2"
        onClick={() => {
          setVal((prev) => {
            return prev + 1;
          });
        }}>
        Plus One
      </button>
      <h1>Name: {elem.name}</h1>
      <h1>Banned: {elem.isBanned.toString()}</h1>
      <button
        className="bg-green-400 rounded-md p-2"
        onClick={() => {
          setElem((prev) => {
            return { ...prev, isBanned: !prev.isBanned };
          });
        }}>
        Plus One
      </button>
    </div>
  );
}

export default App;
