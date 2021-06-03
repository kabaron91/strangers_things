import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios' 

import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import Profile from './components/Profile'


const App = () =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
        <main>
            <Switch>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login} />
                <Route path='/posts' component={Posts} />
                <Route path='/newpost' component={NewPost} />
                <Route path='/profile' component={Profile} />
                <Route path='/' component={Posts} />
            </Switch>
        </main>
        </div>
    )
}









ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById("app")
)


