import React from 'react'
import Player from '../player/Player'
import Map from '../components/Map'

export default function Game(props) {
    return (
        <div style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
        }}>
            <Map />
            <Player />
        </div>
    )
}
