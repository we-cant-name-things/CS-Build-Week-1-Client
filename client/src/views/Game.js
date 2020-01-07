import React from "react";
import Player from "../player/Player";
import Map from "../components/Map";
import {tiles} from "../data/maps/1";

export default function Game(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "600px",
        margin: "20px auto"
      }}
    >
      <Map tiles={tiles} />
      <Player />
    </div>
  );
}
