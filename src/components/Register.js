import React from 'react'

const Register = function () {
    return (
        <div id="login">
            <h1>Please Register Below</h1>
            <form>
                <label for="registerUsername">Username </label>
                <input type="text" id="registerUsername" name="registerUsername"/><br/>
                <label for="registerPassword">Password </label>
                <input type="password" id="registerPassword" name="registerPassword"/><br/>
                <input type="Submit"/> 
            </form>
        </div>
    )
}



export default Register 

