import React, { useState } from "react";

function Card({ data, handleClick, index }) {
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={data.image} alt="" />
      </div>
      <div>
        <h3 className="text-xl leading-none font-semibold">{data.name}</h3>
        <h6 className="text-sm">{data.artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 whitespace-nowrap bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] ${
          data.added ? "bg-teal-500" : "bg-orange-600"
        } absolute text-white text-xs rounded-full`}>
        {data.added ? "Added" : "Add to Favourite"}
      </button>
    </div>
  );
}

export default Card;
