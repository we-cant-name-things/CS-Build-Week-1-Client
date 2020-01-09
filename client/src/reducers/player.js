import {
  GET_PLAYERS,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE
} from "../actions/types.js";

const intialState = {
  name: "gsamaniego41@gmail.com",
  position: [600, 540],
  //   spriteLocation: "-120px",
  spriteLocation: "move_north",
  direction: "NORTH",
  topOfMap: false,
  isFetching: false,
  error: null,
  food_available: 0,
  water_available: 0,
  city: "Miami",
  state: "Florida"
};

const player = (state = intialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    case GET_PLAYER_SUCCESS:
      console.log("res.data:", action.payload);
      return {...state, ...action.payload};
    case GET_PLAYER_FAILURE:
      console.log("error", action.payload);
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default player;
