import React from "react";
import '../App.css'
import { Link } from 'react-router-dom'

export default function Menu({ history }) {

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('game_token')
    history.push('/login')
    window.location.reload()
  }

  const map = e => {
      e.preventDefault()
      history.push('/map')
      window.location.reload()
  }

  return (
    <div className="menu">
      <h3>Menu</h3>
      <div className="stat column">
        <button onClick={logout} className='logout_btn'>Log Out</button>
        <button onClick={map} className='logout_btn' style={{marginTop: '15px'}}>View Map</button>
      </div>
    </div>
  );
}