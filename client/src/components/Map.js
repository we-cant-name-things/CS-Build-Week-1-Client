import React from "react";
import {connect} from "react-redux";
import {SPRITE_SIZE} from "../constants";
import grass from "../assets/walkable/grass.png";

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
      return "grass";
    case 5:
      return "tree";
    case 6:
      return "wall";
    case 7:
      return "rock";
    case 8:
      return "fence";
    case 9:
      return "counter";
    case 10:
      return "store";
    case 11:
      return "chest";
    case 12:
      return "water";
    default:
      return "";
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    ></div>
  );
}

function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
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
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tiles: state.map.tiles
  };
};

export default connect(mapStateToProps)(Map);
