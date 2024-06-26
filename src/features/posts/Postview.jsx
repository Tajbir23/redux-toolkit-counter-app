import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postsSlice"


const Postview = () => {
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()
    console.log(posts)

    useEffect(() => {
        dispatch(fetchPosts())
    },[])
  return (
    <div>
        {posts.map((post) => {
            return <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        })}
    </div>
  )
}

export default Postview