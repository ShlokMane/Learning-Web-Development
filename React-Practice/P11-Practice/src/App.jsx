import React, { useRef } from "react";

function App() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);
  };
  return (
    <form action="" onClick={handleClick}>
      <input ref={name} type="text" placeholder="Name" />
      <input ref={age} type="number" placeholder="Age" />

      <input ref={email} type="text" placeholder="Email" />
      <input type="submit" />
    </form>
  );
}

export default App;
