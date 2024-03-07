import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1626407937756-0ca787f02f35?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Love",
      artist: "Anabelle",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Smack That",
      artist: "Akon",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1520446266423-6daca23fe8c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Photograph",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535057697339-e2a798221230?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "The Night We Met",
      artist: "Lord Huron",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1588279247048-8e7b3959383d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nahin Milta",
      artist: "Bayaan ",
      added: false,
    },
  ];

  const [realData, setReadData] = useState(data);

  const addToFavourite = (index) => {
    setReadData((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            added: !item.added,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={realData}></Navbar>
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {realData.map((obj, i) => {
          return (
            <Card
              key={i}
              data={obj}
              handleClick={addToFavourite}
              index={i}></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
