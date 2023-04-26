import { NewBlogPost, NewEvent } from '@/firebase/addData';
import { getBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

