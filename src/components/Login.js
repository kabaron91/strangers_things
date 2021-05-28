import React from 'react'

const Login = function () {
    return (
        <div id="login">
            <form>
                <label for="loginUsername">Username </label>
                <input type="text" id="loginUsername" name="loginUsername"/><br/>
                <label for="loginPassword">Password </label>
                <input type="password" id="loginPassword" name="loginPassword"/><br/>
                <input type="Submit"/> 
            </form>
        </div>
    )
}

export default Login 
