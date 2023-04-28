'use client';
import React, { useState, useEffect } from 'react';
import { NewBlogPost } from '@/firebase/addData';
import { getBlogPosts } from '@/firebase/getData';
import Link from 'next/link';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<NewBlogPost[]>([]);
  // TODO: fix explicit any
  // @ts-ignore
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { res } = await getBlogPosts();
        //TODO:
        //@ts-ignore
        setPosts([...res]);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;

  if (!posts.length) {
    return <p>No posts found</p>;
  }

  return (
    <section>
      <h2>Blog posts</h2>
      <ul>
        {posts.length > 0 &&
          posts.map((post, i) => (
            <div key={i}>
              {/* TODO: */}
              {/* @ts-ignore */}
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </div>
          ))}
      </ul>
    </section>
  );
};

export default Page;
