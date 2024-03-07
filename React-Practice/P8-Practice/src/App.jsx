import React, { useState } from "react";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "John",
      profession: "Painter",
      image:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Shlok",
      profession: "Developer",
      image:
        "https://plus.unsplash.com/premium_photo-1681882593262-b80ada0342f4?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Sanjay",
      profession: "Accountant",
      image:
        "https://images.unsplash.com/photo-1579983926774-399a9cb765c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Mane",
      profession: "Manager",
      image:
        "https://images.unsplash.com/photo-1631019553258-043d88ef767b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  const handleFriendsButton = (i) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === i) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item, index) => (
          <Card
            onAddFriend={handleFriendsButton}
            key={index}
            index={index}
            image={item.image}
            name={item.name}
            profession={item.profession}
            friends={item.friends}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
