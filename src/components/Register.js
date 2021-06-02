import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Register = function () {
    const [user, setUser] = useState({
        user:{
            username: '',
            password: '',
        }
    });
    
    const handleUserNameRegister = (event) => {
        setUser((user) => ({
            user: {
                username: event.target.value,
                password: user.user.password
            }
        }));
    };
    
    const handlePasswordRegister = (event) => {
        setUser((user) => ({
            user: {
                username: user.user.username,
                password: event.target.value,
            }
        }));
    };

    const [registered, setRegistered] = useState(false)

    async function registerUser(user){
        try {
            let response = await axios.post(`${BASE_URL}/users/register`, user)
            let token = response.data.data.token
            localStorage.setItem('token', token)
            setRegistered(true)
        } catch (error){
            alert('Username already taken. Please try again.')
        } 
    }

    if (registered === true) {
        return <Redirect to='/login' />
    }

    return (
        <div id="register">
            <h1>Please Register Below</h1>
            <h3>Username and Password must be at least 5 characters long.</h3>
            <form>
                <label for="registerUsername">Username </label>
                <input required minLength="5" type="text" id="registerUsername" name="registerUsername" onChange={handleUserNameRegister} value={user.user.username}/><br/>
                <label for="registerPassword">Password </label>
                <input required minLength="5" type="password" id="registerPassword" name="registerPassword" value={user.user.password} onChange={handlePasswordRegister}/><br/>
                <input type="Submit" onClick={(event)=>{
                    event.preventDefault()
                    registerUser(user)
                }}/>
            </form>
        </div>
    )
}

export default Register 




