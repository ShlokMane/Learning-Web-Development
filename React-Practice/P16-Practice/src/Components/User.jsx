import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users, setUsers } = useContext(UserContext);
  console.log(users);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="mt-10 w-1/2 flex flex-col">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className="p-3">
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
