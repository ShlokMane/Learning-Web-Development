import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32  rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 w-full h-full object-cover transition-tansform duration-700 ease-in-out ${
            val ? "translate-x-[95%]" : "-translate-x-[5%]"
          }`}
          src="https://images.unsplash.com/photo-1608278047522-58806a6ac85b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 w-full h-full object-cover transition-tansform duration-700 ease-in-out  ${
            val ? "-translate-x-[105%]" : "-translate-x-[5%]"
          }`}
          src="https://images.unsplash.com/photo-1674448417295-088682b6adec?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => {
            setVal(() => !val);
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaArrowRightLong size={".7em"} />
        </span>
      </div>
    </div>
  );
}

export default App;
