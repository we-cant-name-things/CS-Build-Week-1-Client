import {
  MOVE_PLAYER,
  GET_PLAYER,
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
  food: 0,
  water: 0,
  food_available: 2,
  water_available: 2,
  food_available2: 5,
  water_available2: 5,
  city: "Miami",
  state: "Florida",
  left: "Jacksonville",
  right: "Tallahassee"
};

const player = (state = intialState, action) => {
  switch (action.type) {
    case MOVE_PLAYER:
      return {
        ...state,
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
