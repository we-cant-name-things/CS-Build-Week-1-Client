import React from "react";
import {connect} from "react-redux";
import {SPRITE_SIZE} from "../constants";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "tree";
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
        width: "1200px",
        height: "600px",
        backgroundColor: "green"
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
  return {...state};
};

export default connect(mapStateToProps)(Map);
