import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [user, setUsers] = useState([]);

  const handleFormSubmit = (data) => {
    setUsers([...user, data]);
  };
  const handleRemoveCard = (i) => {
    setUsers(user.filter((item, index) => index !== i));
  };
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={user} handleRemoveCard={handleRemoveCard}></Cards>
        <Form handleFormSubmit={handleFormSubmit}></Form>
      </div>
    </div>
  );
}

export default App;
