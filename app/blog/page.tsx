'use client';
import React, { useState, useEffect } from 'react';
import { NewBlogPost } from '@/firebase/addData';
import { BlogPost, useGetBlogPosts } from '@/firebase/getData';
import Link from 'next/link';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

const Page: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState<NewBlogPost[]>([]);
  // TODO: fix explicit any
  // @ts-ignore
  // const [error, setError] = useState<any>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { res } = await getBlogPosts();
  //       //TODO:
  //       //@ts-ignore
  //       setPosts(res);
  //       setLoading(false);
  //     } catch (e) {
  //       setError(e);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { posts, loading, error } = useGetBlogPosts();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;

  console.log(posts);
  if (!posts?.length) {
    return <p>No posts found</p>;
  }

  return (
    <section>
      <h2>Blog posts</h2>
      <ul>
        {posts.map((post: BlogPost) => (
          <div key={post.id}>
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
