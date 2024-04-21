import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, username: "Shlok", city: "Bengaluru" },
    { id: 2, username: "Sanjay", city: "Mumbai" },
    { id: 1, username: "Piyush", city: "Delhi" },
  ]);

  console.log(props);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
