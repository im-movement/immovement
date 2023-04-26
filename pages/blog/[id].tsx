import { NewBlogPost } from "@/firebase/addData"
import { getBlogPost } from "@/firebase/getData"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Post = () => {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<NewBlogPost>()

  const router = useRouter();
  const { id } = router.query;

  const fetchData = async () => {
    setLoading(true)

    const res = await getBlogPost(id)

    setPost(res)
    setLoading(false)
  }

    useEffect(() => {
        fetchData()
    }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <div>Post</div>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <h3>{Date(post.publishDate)}</h3>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;