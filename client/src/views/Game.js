import React, {useState, useEffect} from "react";
import {tiles} from "../data/maps/1";
import {store} from "../store";
import {connect} from "react-redux";

import Player from "../player/Player";
import Map from "../components/Map";
import Stats from "../components/Stats";
import Controls from "../components/Controls";
import Popup from "../components/Popup";
import IntroText from "../components/IntroText";

const Game = props => {
  useEffect(() => {
    store.dispatch({
      type: "ADD_TILES",
      payload: {
        tiles
      }
    });
  }, []);

  // console.log(props.player.topOfMap);
  console.log(props.game.isNewGame);
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
        {props.game.isNewGame ? <IntroText /> : null}
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
