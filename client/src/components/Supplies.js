import React from "react";

function Supplies({location, food, water}) {
  return (
    <div
      style={{
        padding: "16px"
      }}
    >
      <h3>
        <span className="stat">{location}</span> - You found:
      </h3>
      {food === 0 && water === 0 ? (
        <p>No items here.</p>
      ) : (
        <>
          <p>{food} food</p>
          <p>{water} water</p>
        </>
      )}
    </div>
  );
}

export default Supplies;
