import React, { useState } from "react";

function App() {
  const [elem, setElem] = useState("Hey brother");
  console.log(elem.length);
  console.log(setElem);
  const onClickButton = () => {
    if (elem.length <= 12) {
      setElem("Hello brother, I have changed the state");
    } else {
      setElem("Hey brother");
    }
  };
  return (
    <>
      <div className="px-5">
        <h1>{elem}</h1>
        <button onClick={onClickButton} className="bg-red-300 rounded-md px-3">
          Wanna Change State?
        </button>
      </div>
    </>
  );
}

export default App;
