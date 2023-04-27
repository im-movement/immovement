"use client";
import React, { useState, useEffect } from "react";
import { NewBlogPost } from "@/firebase/addData"
import { getBlogPost } from "@/firebase/getData"
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({params}) => {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<NewBlogPost>()

  const id = params.id;

  
  useEffect(() => {
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
        fetchData()
    }, [])

  if (loading) return <div>Loading...</div>
  return (
    <>
      <Link href='/blog'>{'< Back to all posts'}</Link>
      <section>
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
      </section>
    </>
  );
}

export default Page;
