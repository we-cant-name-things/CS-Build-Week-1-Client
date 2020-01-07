import React from "react";
import character from "../assets/Characters/character.png";
import {connect} from "react-redux";
import handleMovement from "../player/movement";
import "../index.css";

const Player = props => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        // backgroundImage: `url('${character}')`,
        // backgroundPosition: props.spriteLocation,
        width: "40px",
        height: "60px",
        overflow: "hidden"
      }}
    >
      <img
        className="character_sprite pixelate"
        src={character}
        alt="character"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(handleMovement(Player));
