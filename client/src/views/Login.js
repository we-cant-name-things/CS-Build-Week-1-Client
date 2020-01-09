import React, {useState} from 'react'
import axios from 'axios'
import background from '../assets/background/login_background.png'
import flag from '../assets/background/canadian_flag.png'
import zombieHand from '../assets/background/zombie_hand.png'
import character from '../assets/Characters/character_single.png'
import '../App.css'

import {useAuth0} from "../react-auth0-spa";

export default function Login({history}) {
    const [creds, setCreds] = useState({email: '', password: ''})

    const changeHandler = e => {
        setCreds({...creds, [e.target.name]: e.target.value})
        console.log(creds)
    }

    const login = e => {
        e.preventDefault();
        // axios
        //     .post('URL_HERE', creds)
        //     .then(res => {
        //         console.log('response =>',res)
        //         localStorage.setItem('token', "token_here")
        //         history.push('/')
        //     })
        //     .catch(err => console.log(err))
        localStorage.setItem('token', "token_here")
        history.push('/')
    }

    return (
        <>
            <div style={{
                border: '4px solid black',
                height: '98vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundImage: `url("${background}")`,
                backgroundSize: 'cover'
            }}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <h1 style={{color: 'red'}}>GAME_TITLE_HERE</h1>

                    <NavBar/>
                    {/*<form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', width: '250px', alignItems: 'center'}}>*/}
                    {/*    <input placeholder='E-mail' onChange={changeHandler} name='email' value={creds.email} style={{ marginBottom: '10px'}} />*/}
                    {/*    <input placeholder='Password' type='password' onChange={changeHandler} name='password' value={creds.password} style={{ marginBottom: '10px'}} />*/}
                    {/*    <button className='btn' >Login</button>*/}
                    {/*</form>*/}
                </div>


                <img src={character} style={{height: '75px', position: 'absolute', top: '88%', left: '37%'}}/>
                <img src={zombieHand}
                     style={{height: '100px', position: 'absolute', top: '86%', left: '15%', maxWidth: '100%'}}/>
                <img src={flag} style={{position: 'absolute', top: '71%', left: '83%', maxWidth: '100%'}}/>
            </div>
        </>
    )
}


const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Play</button>
            )}
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    );
};
