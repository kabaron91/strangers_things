import React, {useState, useEffect} from 'react'




const Header = () => {
    let [loggedState, setLoggedState] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token')) {
        setLoggedState(true)
    }}, [])
    return (
        <>
            <div id='topHeader'>
                <h1>Stranger's Things</h1>
            </div>
            <div id='bottomHeader'>
                <h2>Home</h2>
                <h2>Posts</h2>
                {!loggedState ? <><h2>Log In</h2>
                <h2>Sign Up</h2></> : <><h2>Profile</h2>
                <h2 onClick={() => {logoutUser(), setLoggedState(false)}}>Log Out</h2></>}
            </div>
        </>
    )
}

function logoutUser () {
    localStorage.removeItem('token')
}

export default Header