import React from "react";

function Card({ image, name, profession, onAddFriend, friends, index }) {
  return (
    <div className="w-52 bg-white-100 rounded overflow-hidden">
      <div className="w-full h-40 bg-sky-200">
        <img
          className="w-full h-full object-cover object-[center]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full p-3 bg-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          className={`mt-4 px-3 py-1 text-xs text-white ${
            friends ? "bg-red-400" : "bg-green-400"
          } font-semibold rounded-md`}
          onClick={() => onAddFriend(index)}>
          {!friends ? "Add Friends" : "Remove Friends"}
        </button>
      </div>
    </div>
  );
}

export default Card;
