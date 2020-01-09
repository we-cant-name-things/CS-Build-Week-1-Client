import React, {useRef} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import {SPRITE_SIZE} from "../constants";
import grass from "../assets/walkable/grass.png";
import Supplies from "./Supplies";

const SuppliesPopup = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(3, 3, 3, 0.85);
  border: 3px solid #888;
`;

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "road";
    case 2:
      return "dirt";
    case 3:
      return "floor";
    case 4:
      return "water";
    case 5:
      return "tree";
    case 6:
      return "wall";
    case 7:
      return "fence";
    case 8:
      return "supplies1";
    case 9:
      return "supplies2";
    default:
      return "";
  }
}

function MapTile({player, tile}) {
  // if getTileSprite(props.tile) === supplies1
  // && player position around to supplies
  // add locations food_available and water_available
  // if getTileSprite(props.tile) === supplies2
  // && player position around to supplies
  // add locations food_available2 and water_available2
  // trigger popup, positioned absolutely above tile
  // ok to close popup
  //   console.log(props.tile);

  //   console.log(
  //     getTileSprite(props.tile) === "supplies1" ||
  //       getTileSprite(props.tile) === "supplies2"
  //       ? "supplies"
  //       : null
  //   );
  //   console.log("map tile:", player.position);

  return (
    <>
      {getTileSprite(tile) === "supplies1" &&
      player.position[0] === 300 &&
      player.position[1] === 420 ? (
        <SuppliesPopup>
          <Supplies
            food={player.food_available}
            water={player.water_available}
          />
        </SuppliesPopup>
      ) : null}
      {getTileSprite(tile) === "supplies2" &&
      player.position[0] === 840 &&
      player.position[1] === 180 ? (
        <SuppliesPopup>
          <Supplies
            food={player.food_available2}
            water={player.water_available2}
          />
        </SuppliesPopup>
      ) : null}
      {/* {(getTileSprite(tile) === "supplies1" &&
        player.position[0] === 300 &&
        player.position[1] === 420) ||
      (getTileSprite(tile) === "supplies2" &&
        player.position[0] === 840 &&
        player.position[1] === 180) ? (
        <SuppliesPopup>
          <Supplies
            food={player.food_available}
            water={player.water_available}
          />
        </SuppliesPopup>
      ) : null} */}
      <div
        className={`tile ${getTileSprite(tile)}`}
        style={{
          height: SPRITE_SIZE,
          width: SPRITE_SIZE
          //   position: "absolute"
        }}
      ></div>
    </>
  );
}

function MapRow(props) {
  //   console.log("map row", props);
  //   const {tiles} = props.map;
  return (
    <div className="row">
      {props.tiles.map((tile, i) => (
        <MapTile key={i} tile={tile} player={props.player} />
      ))}
    </div>
  );
}

function Map(props) {
  const {tiles} = props.map;

  return (
    <div
      style={{
        width: "1260px",
        height: "600px",
        backgroundImage: `url('${grass}')`
        // backgroundColor: "green"
        // border: '4px solid white',
        // margin: '10px auto'
      }}
    >
      {tiles.map((row, i) => (
        <MapRow key={i} tiles={row} player={props.player} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
  //   return {
  //     player: state.player,
  //     tiles: state.map.tiles
  //   };
};

export default connect(mapStateToProps)(Map);
