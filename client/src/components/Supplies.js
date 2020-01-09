import React from "react";

function Supplies(props) {
  return (
    <div
      style={{
        padding: "16px"
      }}
    >
      <h3>You found:</h3>
      <p>{props.food} food</p>
      <p>{props.water} water</p>
    </div>
  );
}

export default Supplies;
