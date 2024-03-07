import React from "react";

function Card() {
  const data = [
    {
      name: "Mahiya Ve",
      description: "The name of the card that will be displayed",
    },
    {
      name: "Junoon",
      description: "The name of the card that will be displayed",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((elem, index) => (
        <div key={index} className="w-90 song px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-2">{elem.description}</p>
          <button
            onClick={() => {
              alert("Heheheheh");
            }}
            className="px-2 py-1 bg-blue-400 rounded-md text-xs font-semibold text-zinc-100 mt-3">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
