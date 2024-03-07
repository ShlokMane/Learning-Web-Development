import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti odio, rerum",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Flipkart Basics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx 8fA%3D%3D",
      name: "Shlok Mane",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis animi ipsum veritatis?",
      instock: false,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="absolute  flex gap-10 justify-center items-center left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        {data.map((elem, index) => (
          <div key={index} className="w-52 bg-zinc-100  rounded-md">
            <div className="w-full h-32 bg-zinc-400">
              <img className="w-full h-full object-cover" src={elem.image} />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{elem.name}</h2>
              <p className="text-xs mt-3">{elem.description}</p>
              <button
                className={`px-4 py-1 text-xs mt-3 rounded ${
                  elem.instock ? "bg-blue-400" : "bg-red-400"
                } text-zinc-100`}>
                {elem.instock ? "In Stock" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
