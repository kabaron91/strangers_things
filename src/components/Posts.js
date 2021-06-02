import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'
const token = localStorage.getItem('token')

async function getPosts() {
    try {
        let { data } = await axios.get(`${BASE_URL}/posts`)
        console.log(data.data.posts)
        return data.data.posts
    } catch (error) {
        console.error(error)
    }
}

export default getPosts

