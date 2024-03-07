import React from "react";

function Navbar({ data }) {
  const favourites = data.filter((item) => {
    return item.added;
  });
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3 className="text-orange-500 font-bold">Orange</h3>
      <div className="flex flex-row p-2 px-4 rounded-md text-sm bg-orange-600 text-white gap-3">
        <h3>Favourites</h3>
        <h4>{favourites.length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
