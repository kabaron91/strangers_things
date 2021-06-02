import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'
const token = localStorage.getItem('token')

const Posts = ()=> {

    let [posts, setPosts] = useState([])

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

    let postElement = posts.map((post, index, arr) =>{
        return (
            <div key={post._id}>
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
                {arr[index].isAuthor ? <> <p onClick={()=>{deletePost(post)}}>delete</p> <Link to='/editpost'><p>edit post</p></Link> </>: null}
            </div>
        )
    })

    
    return (
        <>
        {token ? <Link to='/newpost'>Create New Post</Link>: null}
        {postElement}
        </>
    )
}



export default Posts

