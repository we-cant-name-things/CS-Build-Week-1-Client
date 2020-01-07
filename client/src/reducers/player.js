import { GET_PLAYER } from '../actions/types.js'

const intialState = {
    name: 'Gabe',
    position: [0,0],
    spriteLocation: '0px 0px',
}

const player = (state = intialState, action) => {
    switch(action.type){
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default player;