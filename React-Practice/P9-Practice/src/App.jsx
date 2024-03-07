import React, { useState } from "react";
import Button from "./Button";

function App() {
  return (
    <div className="m-4 flex gap-4">
      <Button text={"Know More"} bg={"bg-cyan-400"} />
      <Button text={"Download"} bg={"bg-red-400"} />
    </div>
  );
}

export default App;
