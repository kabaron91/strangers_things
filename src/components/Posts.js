import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
            </div>
        )
    })
    return postElement
}



export default Posts

