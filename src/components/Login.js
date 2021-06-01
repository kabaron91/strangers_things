import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Login = function () {
    const [user, setUser] = useState({
        user:{
            username: '',
            password: ''
        }
    })

    const handleUserNameLogin = (event) => {
        setUser((user) => ({
            user: {
                username: event.target.value,
                password: user.user.password
            }
        }))
    }

    const handlePasswordLogin = (event) => {
        setUser((user) => ({
            user: {
                username: user.user.username,
                password: event.target.value
            }
        }))
    }

    return (
        <div id="login">
            <h1>Please Login Below</h1>
            <form>
                <label for="loginUsername">Username </label>
                <input required type="text" id="loginUsername" name="loginUsername" onChange={handleUserNameLogin} value={user.user.username}/><br/>
                <label for="loginPassword">Password </label>
                <input required type="password" id="loginPassword" name="loginPassword" onChange={handlePasswordLogin} value={user.user.password}/><br/>
                <input type="Submit" onClick={(event) => {
                    event.preventDefault()
                    loginUser(user)
                }}/>
            </form>
        </div>
    )
}

async function loginUser(user) {
    try {
        let response = await axios.post(`${BASE_URL}/users/login`, user)
        let token = response.data.data.token
        console.log(token)
        localStorage.setItem('token', token)
    } catch (error) {
        throw error
    }
}

export default Login 
