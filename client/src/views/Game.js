import React, {useEffect} from "react";
import {tiles} from "../data/maps/1";
import {store} from "../store";
import {connect} from "react-redux";

import Player from "../player/Player";
import Map from "../components/Map";
import Stats from "../components/Stats";
import Controls from "../components/Controls";
import Popup from "../components/Popup";

const Game = props => {
  useEffect(() => {
    store.dispatch({
      type: "ADD_TILES",
      payload: {
        tiles
      }
    });
  }, []);

  console.log(props.player.topOfMap);
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "1260px",
          height: "600px",
          margin: "20px auto"
        }}
      >
        <Map />
        <Player />
        {props.player.topOfMap ? <Popup /> : null}
      </div>
      <div className="game_container">
        <Stats />
        <Controls />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Game);
