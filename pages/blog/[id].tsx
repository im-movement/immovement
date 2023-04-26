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

    // TODO: fix type error
    // @ts-ignore
    const res = await getBlogPost(id)

    // TODO: fix type error
    // @ts-ignore
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
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <h2>{post.title}</h2>
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <h3>{post.author}</h3>
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <h3>{Date(post.publishDate)}</h3>
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <p>{post.content}</p>
    </div>
  )
}

export default Post;