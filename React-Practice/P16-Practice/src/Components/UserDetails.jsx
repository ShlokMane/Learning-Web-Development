import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  console.log(users[id]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-200">{users[id].username}</h1>
      <h1 className="text-2xl font-bold text-red-200">{users[id].city}</h1>
    </div>
  );
};

export default UserDetails;
