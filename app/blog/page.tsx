"use client";
import React, { useState, useEffect } from "react";
import { NewBlogPost } from '@/firebase/addData';
import { getBlogPosts } from '@/firebase/getData';
import Link from 'next/link';

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<NewBlogPost[]>([])
  // TODO: fix explicit any
  // @ts-ignore
  const [error, setError] = useState<any>(null)

  
  useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
    
          const res = await getBlogPosts()
          // TODO: fix type error
          // @ts-ignore
          setPosts([...res])
          setLoading(false)
        } catch (e) {
          setError(e)
          setLoading(false)
        }
      }
        fetchData()
    }, [])

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error.toString()}</div>

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
}

export default Page;
