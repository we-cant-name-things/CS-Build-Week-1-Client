import axios from "axios";
import {
  GET_PLAYER,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  SET_NEWGAME
} from "./types";

/* Player actions */
export const getPlayer = () => {
  const player = axios.get(
    "https://we-cant-name-things.herokuapp.com/api/player/"
    // {params: {email: "seanwu20@gmail.com"}}
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
