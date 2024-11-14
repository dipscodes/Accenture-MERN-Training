import React from "react";

function PropsDemo2(props) {
  return (
    <div>
      <p>My Name is: {props.name}</p>
      <p>I am {props.age} years old</p>
      <p>I am from {props.city}</p>
    </div>
  );
}

export default PropsDemo2;
