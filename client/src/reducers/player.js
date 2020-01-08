import {GET_PLAYER} from "../actions/types.js";

const intialState = {
  name: "Gabe",
  position: [600, 540],
  //   spriteLocation: "-120px",
  spriteLocation: "move_north",
  direction: "NORTH"
};

const player = (state = intialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default player;
