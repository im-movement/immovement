'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DocumentData } from '@firebase/firestore';

import { getBlogPost } from '@/firebase/getData';

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<DocumentData>();

  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getBlogPost(id);
      setPost(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Link href="/blog">{'< Back to all posts'}</Link>
      <section>
        <div>Post</div>
        <h2>{post?.title}</h2>
        <h3>{post?.author}</h3>
        <h3>{new Date(post?.publishDate).toString()}</h3>
        <p>{post?.content}</p>
      </section>
    </>
  );
};

export default Page;
