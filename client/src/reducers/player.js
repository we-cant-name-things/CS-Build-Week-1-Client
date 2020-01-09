import {
  MOVE_PLAYER,
  GET_PLAYER,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  PICKUP_SUPPLIES
} from "../actions/types.js";

const intialState = {
  email: "gsamaniego41@gmail.com",
  position: [600, 540],
  spriteLocation: "move_north",
  direction: "NORTH",
  topOfMap: false,
  isFetching: false,
  error: null,
  food: 12,
  water: 32,
  food_available: 2,
  water_available: 7,
  food_available2: 1,
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
      //   console.log("res.data:", action.payload);
      return {...state, ...action.payload};
    case GET_PLAYER_FAILURE:
      //   console.log("error", action.payload);
      return {...state, error: action.payload};
    case PICKUP_SUPPLIES:
      console.log("PICKUP SUPPLIES REDUCER");
      const {food, water} = action.payload;
      return {...state, food: state.food + food, water: state.water + water};
    //   return {...state, food: state.food++, water: state.water++};
    default:
      return state;
  }
};

export default player;
