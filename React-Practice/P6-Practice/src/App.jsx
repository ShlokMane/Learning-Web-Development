import React, { useState } from "react";

function App() {
  const [val, setValue] = useState({ name: "Shlok", age: 24 });
  const [elem, setElem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [val1, setValue1] = useState([
    { name: "Shlok", age: 24 },
    { name: "Sanjay", age: 55 },
    { name: "Mane", age: 60 },
  ]);
  return (
    <div>
      {/* <button
        className="bg-cyan-400 rounded-md p-4"
        onClick={() => {
          setValue({ ...val, gender: "male" });
        }}>
        Click
      </button> */}
      {elem.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })}
      <button
        className="bg-cyan-400 rounded-md p-4"
        onClick={() => {
          setElem((prev) => {
            const temp = [...prev];
            temp.pop();
            return temp;
          });
        }}>
        Remove one
      </button>
      <button
        onClick={() => {
          setElem((prev) => {
            const temp = [...prev, prev.length + 1];
            temp.push(temp.length + 1);
            return temp;
          });
        }}>
        Add two
      </button>
      {val1.map((val2) => {
        return (
          <h1>
            name: {val2.name} age: {val2.age}
          </h1>
        );
      })}
      <button
        onClick={() => {
          setValue1(() =>
            val1.map((val2) => {
              return val2.name === "Shlok"
                ? { name: "Shlok", age: val2.age + 1 }
                : val2;
            })
          );
        }}>
        Change Shlok's Age
      </button>
    </div>
  );
}

export default App;
