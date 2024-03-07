import React from "react";
import Card from "./Card";

function Cards({ users, handleRemoveCard }) {
  return (
    <div className="w-full max-h-96 overflow-auto flex justify-center gap-2 p-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <Card
            user={item}
            handleRemoveCard={handleRemoveCard}
            index={index}></Card>
        );
      })}
    </div>
  );
}

export default Cards;
