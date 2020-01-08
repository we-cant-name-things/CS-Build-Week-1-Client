import React, {useState, useEffect} from "react";
import character from "../assets/Characters/character.png";
import {connect} from "react-redux";
import {store} from "../store";
import handleMovement from "../player/movement";
import "../index.css";

const Player = props => {
  //   const [walking, setWalking] = useState(false);
  //   console.log(walking);

  // useEffect(() => {
  //   setWalking(true);
  //   setTimeout(() => {
  //     setWalking(false);
  //   }, 2000);
  // }, []);

  //   const handleWalk = () => {
  //     setWalking(true);
  //     setTimeout(() => {
  //       setWalking(false);
  //     }, 2000);
  //   };

  return (
    <div
      //   onKeyDown={() => setWalking(!walking)}
      //   onKeyDown={() => handleWalk()}
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        // backgroundImage: `url('${character}')`,
        // backgroundPosition: props.spriteLocation,
        width: "40px",
        height: "60px",
        overflow: "hidden",
        // border: "1px solid red",
        marginLeft: "10px"
      }}
    >
      <img
        className={`character_sprite pixelate ${props.spriteLocation}`}
        src={character}
        alt="character"
        style={
          {
            //   position: "absolute",
            //   bottom: `${props.spriteLocation}`
          }
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(handleMovement(Player));
