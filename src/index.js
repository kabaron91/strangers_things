import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios' 

import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'


const App = () =>{
    return(
        <div>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login} />
        </div>
    )
}









ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById("app")
)

ReactDOM.render(
    <Router><Header /></Router>,
    document.getElementById("appHeader")
)

