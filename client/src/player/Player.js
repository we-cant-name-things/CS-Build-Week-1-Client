import React from 'react'
import character from '../assets/Characters/character.png'
import { connect } from 'react-redux'
import handleMovement from '../player/movement'

const Player = props => {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${character}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '60px'
            }}
        />
    )
}

const mapStateToProps = state => ({
    ...state.player
})

export default connect(mapStateToProps)(handleMovement(Player))