import { NewBlogPost } from '@/firebase/addData';
import { getBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const BlogPosts = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<NewBlogPost[]>([])

  
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
    
        const res = await getBlogPosts()
      // TODO: fix type error
      // @ts-ignore
        setPosts([...res])
        setLoading(false)
      }
        fetchData()
    }, [])

  if (loading) return <div>Loading...</div>

  if (!posts) {
    return <p>No posts found</p>
  }

  return (
      <section>
        <h2>Blog posts</h2>
        <ul>
          {posts.length > 0 && posts.map((post, i) => (
            <div key={i}>
              {/* TODO: */}
              {/* @ts-ignore */}
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </div>
          ))}
        </ul>
      </section>
  );
};

