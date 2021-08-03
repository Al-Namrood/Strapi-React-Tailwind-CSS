import PostList from './components/PostList'
import Form from './components/Form'
import { useEffect, useState } from 'react';





function App() {

  const [posts, setPosts] = useState([])


  useEffect(() => {

    const getPosts = async () => {

      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }


    getPosts()
  }, [])

  // Add post
  const addPost = async (post) => {
    const res = await fetch("http://localhost:1337/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    setPosts([...posts, data])

  }

  // Fetch posts
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:1337/posts")
    const data = await res.json()
    return data
  }

  return (
    <>
      <Form submit={addPost} />
      <PostList rows={posts} />
    </>
  )

}

export default App;
