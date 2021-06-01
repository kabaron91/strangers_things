import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Register = function () {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    
    const handleUserNameRegister = (event) => {
        setUser((user) => ({
            ...user,
            username: event.target.value,
        }));
    };
    
    const handlePasswordRegister = (event) => {
        setUser((user) => ({
            ...user,
            password: event.target.value,
        }));
    };
    

    return (
        <div id="login">
            <h1>Please Register Below</h1>
            <form>
                <label for="registerUsername">Username </label>
                <input type="text" id="registerUsername" name="registerUsername" onChange={handleUserNameRegister} value={user.username}/><br/>
                <label for="registerPassword">Password </label>
                <input type="password" id="registerPassword" name="registerPassword" value={user.password} onChange={handlePasswordRegister}/><br/>
                <input type="Submit" onClick={(event)=>{
                    event.preventDefault()
                    console.log('were in the click')
                    console.log(user)
                    registerUser(user)
                }}/> 
            </form>
        </div>
    )
}


async function registerUser(user){
    console.log('in the registerUser function')
    console.log(`${BASE_URL}/users/register`)

    let response = await axios.post(`${BASE_URL}/users/register`, user)
        // .then(function (response) {
        //     console.log(response.data)
        // })
        // .catch(function(error){
        //     console.error(error)
        // })
        console.log(response.data)
}

export default Register 




