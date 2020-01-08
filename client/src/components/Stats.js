import React from "react";
import player from "../reducers/player";

export default function Stats() {
  const playerInfo = {
    name: "gsamaniego41@gmail.com",
    food: 5,
    water: 3,
    current_location: {
      city: "Miami",
      state: "FL"
    }
  };
  console.log(playerInfo.name);
  return (
    <div className="stats">
      <h3>Stats</h3>
      <div className="stat">
        <span className="stat__title">Name:</span>{" "}
        {playerInfo.name.substring(0, playerInfo.name.lastIndexOf("@"))}
      </div>
      <div className="stat">
        <span className="stat__title">Location:</span>{" "}
        {`${playerInfo.current_location.city}, ${playerInfo.current_location.state}`}
      </div>
      <div className="stat">
        <span className="stat__title">Food: </span>
        {playerInfo.food}
      </div>
      <div className="stat">
        <span className="stat__title">Water:</span> {playerInfo.water}
      </div>
    </div>
  );
}
