import React, { useState } from "react";
function App() {
  const [elem, setElem] = useState({ name: "Shlok", isBanned: false });
  return (
    <div className="p-5">
      <h1>Name: {elem.name}</h1>
      <h1>Banned: {elem.isBanned.toString()}</h1>
      <button
        className={`${
          elem.isBanned ? "bg-red-400" : "bg-green-400"
        } rounded-md p-2`}
        onClick={() => {
          setElem((prev) => {
            return { ...prev, isBanned: !prev.isBanned };
          });
        }}>
        Change
      </button>
    </div>
  );
}

export default App;
