import React from "react";
import { useState } from "react";

function ListDemo() {
  const list = ["apple", "orange", "mango", "pineapple", "kiwi"];
  const [name, setName] = useState("John");
  const age = 33;

  function changeName(event) {
    setName(event.target.value);
  }

  return (
    <>
      <ul>
        {list.map((data, i) => (
          <li key={i}>
            {i} === {data}
          </li>
        ))}
      </ul>
      <hr />
      <p>
        Name is {name} and age is {age}{" "}
      </p>
      <input type="text" value={name} onChange={changeName} />
    </>
  );
}

export default ListDemo;
