import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Posts = ()=> {

    let [posts, setPosts] = useState([])

    let [searchTerm, setSearchTerm] = useState('')

    async function getPosts() {
        try {
            let { data } = await axios.get(`${BASE_URL}/posts`, {
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            })
            setPosts(data.data.posts)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getPosts()
    }, [])
    
    let deletePost = async function({_id}){
        await axios.delete(`${BASE_URL}/posts/${_id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
    }

    function postMatches(post, text){
        if (post.title.includes(text) || post.description.includes(text) || post.price.includes(text) || post.author.username.includes(text) ){
            return true
            
        } else {
            return false
        }
    }

    const filteredPosts = posts.filter(post =>postMatches(post, searchTerm))
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;  

    let postElement = postsToDisplay.map((post, index, arr) =>{
        return (
            <div key={post._id} id='post'>
                <h1>{arr[index].title}</h1>
                <p>{arr[index].description}</p>
                <h3>Price</h3>
                <p>{arr[index].price}</p>
                <h3>Seller</h3>
                <p>{arr[index].author.username}</p>
                <h3>Location</h3>
                <p>{arr[index].location}</p>
                <h3>Will Deliver?</h3>
                {arr[index].willDeliver ? <p>yes</p> : <p>no</p>}
                {arr[index].isAuthor ? <> <button onClick={()=>{deletePost(post)}}>delete post</button> </>: null}
            </div>
        )
    })

    const token = localStorage.getItem('token')

    return (
        <>
        {<div>
            <label>Search Posts </label>
            <input 
                id='search' 
                type='text' 
                placeholder='enter keywords...'
                value={searchTerm}
                onChange={(event)=>{setSearchTerm(event.target.value)}}
            />
        </div>}
        {token ? <Link to='/newpost'>Create New Post</Link>: null}
        {postElement}
        </>
    )
}



export default Posts

