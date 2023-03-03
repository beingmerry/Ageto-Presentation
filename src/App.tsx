import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface apiData {
  status: number
  statusText: string
  headers: Headers
  data: any
}

interface Post {
  id: number
  title: string
  body: string
}

function App () {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState<apiData[]>([])

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setApiData(data)
    }
    fetchApiData()
    
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className='App'>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
