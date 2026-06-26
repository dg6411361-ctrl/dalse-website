import React from "react";

function Detailspage(props) {
  return (
    <div>
      <p>{props.name}</p>
      <h2>{props.student.name}</h2>
      <p>{props.student.age}</p>
      <p>Welcome</p>
    </div>
  );
}

export default Detailspage;
