import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Button(props) {
  return (
    <div>
      <button className={`px-3 py-2 ${props.bg} rounded-md`}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
