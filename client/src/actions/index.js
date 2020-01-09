import axios from "axios";
import {GET_PLAYER, SET_NEWGAME} from "./types";

export const getPlayer = () => {
  return {type: GET_PLAYER, payload: "CHARACTER_NAME"};
};

export const isNewGame = bool => {
  return {
    type: SET_NEWGAME,
    payload: bool
  };
};
