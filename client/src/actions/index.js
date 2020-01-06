import axios from 'axios'
import { GET_PLAYER } from './types'

export const getPlayer = () => {
    return { type: GET_PLAYER, payload: "CHARACTER_NAME"}
}