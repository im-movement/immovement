'use client';
import React from 'react';
import { BlogPost, useGetBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { Loading } from '../components/Loading';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

const Page: React.FC = () => {
  const { posts, loading, error } = useGetBlogPosts();

  if (loading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;
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
