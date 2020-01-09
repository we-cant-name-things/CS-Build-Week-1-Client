import axios from "axios";
import {
  GET_PLAYER,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  SET_NEWGAME,
  PICKUP_SUPPLIES
} from "./types";

/* Player actions */
export const getPlayer = email => {
  const player = axios.post(
    "https://we-cant-name-things.herokuapp.com/api/player/",
    {email}
  );
  return function(dispatch) {
    dispatch({type: GET_PLAYER});
    player
      .then(res => dispatch({type: GET_PLAYER_SUCCESS, payload: res.data}))
      .catch(err => dispatch({type: GET_PLAYER_FAILURE, payload: err}));
  };
  //   return {type: GET_PLAYER, payload: "CHARACTER_NAME"};
};

export const isNewGame = bool => {
  return {
    type: SET_NEWGAME,
    payload: bool
  };
};

export const pickupSupplies = (food, water) => dispatch => {
  console.log(`PICKED UP ${food} food, ${water} water`);
  //   return function(dispatch) {
  //     dispatch({
  //       type: PICKUP_SUPPLIES,
  //       payload: {food, water}
  //     });
  //   };
  dispatch({type: PICKUP_SUPPLIES, payload: {food, water}});
};
