import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const newPost = function () {
    return (
        <div id="addPost">
            <h1>Add New Post</h1>
            <form>
                <label for="title">Title</label>
                <input required type="text" id="title" name="title" />
                <label for="description">Description</label>
                <input required type="text" id="description" name="description" />
                <label for="price">Price</label>
                <input required type="text" id="price" name="price" />
                <label for="location">Location</label>
                <input type="text" id="location" name="location" />
                <label for="willDeliver">Will deliver?</label>
                <input type="checkbox" id="willDeliver" name="willDeliver" />
                <input type="Submit" />
            </form>
        </div>
    )
}

export default newPost