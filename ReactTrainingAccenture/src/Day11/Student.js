import React, { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(props.marks);

  const increaseMarks = () => {
    if (marks < 100) {
      setMarks((prevMarks) => prevMarks + 5);
    } else {
      alert("Student marks cannot be more than 100");
    }
  };

  return (
    <div>
      <h1>Student Details</h1>
      <div id="student">
        <p>Name: {props.name}</p>
        <p>Roll Number: {props.rollNumber}</p>
        <p>Marks: {marks}</p>
        <button onClick={increaseMarks}>Increase Marks</button>
      </div>
    </div>
  );
}

export default Student;
