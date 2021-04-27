import React,{useState,useEffect} from 'react'
import axios from 'axios'

// function HookDataFetching() {
//     const [posts, setPosts] = useState({})
//     useEffect (() =>{
//         axios
//         .get('https://jsonplaceholder.typicode.com/posts')
//         .then ( res =>{
//             console.log (res)
//             setPosts (res.data)
//         })
//         .catch (err =>{
//             console.log (err)
//         })
//     },[])
//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post =>(<li key={post.id}>{post.title}</li>))
//                 }
//             </ul>
//         </div>
//     )
// }




// function HookDataFetching() {
//     const [posts, setPosts] = useState({})
//     const [id, setId] =useState(1)
//     useEffect (() =>{
//         axios
//         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then ( res =>{
//             console.log (res)
//             setPosts (res.data)
//         })
//         .catch (err =>{
//             console.log (err)
//         })
//     },[id])
//     return (
//         <div>
//             <input value ={id} onChange ={e => setId(e.target.value)}/>
//             <h1>{posts.title}</h1>
//         </div>
//     )
// }



function HookDataFetching() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idChangeFromButton, setIdChangeFromButton] = useState(1)

    const clickHandler = () =>{
        setIdChangeFromButton(id)
    }
    useEffect (() =>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idChangeFromButton}`)
        .then ( res =>{
            console.log (res)
            setPosts (res.data)
        })
        .catch (err =>{
            console.log (err)
        })
    },[idChangeFromButton])
    return (
        <div>
            <input  value ={id} onChange ={e => setId(e.target.value)}/>
            <button  onClick ={clickHandler}>Fetch</button>
            <h1>{posts.title}</h1>
        </div>
    )
}
export default HookDataFetching
