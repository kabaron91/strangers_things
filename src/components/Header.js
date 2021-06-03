import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'



const Header = () => {
    let [loggedState, setLoggedState] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedState(true)
        }}, [])
    
        function logoutUser () {
        localStorage.removeItem('token')
        setLoggedState(false)
    }
   
    return (
        <>
            <div id='topHeader'>
                <h1>Stranger's Things</h1>
            </div>
            <div id='bottomHeader'>
                <Link to='/posts'><h2 id='post'>Posts</h2></Link>
                {!loggedState ? <> <Link to='/login'><h2 id='login'>Log In</h2></Link>
                <Link to='/register'><h2 id='signUp'>Sign Up</h2></Link></> : <><Link to='./profile'><h2 id='profile'>Profile</h2></Link>
                <Link to='/login'><h2 id='logOut' onClick={() => {logoutUser()}}>Log Out</h2></Link></>}
            </div>
        </>
    )
}

export default Header