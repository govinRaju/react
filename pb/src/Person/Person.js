import React from "react";
const person = props => {
  return (
    <div>
      <p>
        I'm a Person! with name{props.name} and heere it is{" "}
        {Math.floor(Math.random() * 30)}{" "}
      </p>

      <p>{props.children}</p>
    </div>
  );
};

export default person;
