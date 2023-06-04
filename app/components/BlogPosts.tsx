import { useDeletePost } from '@/firebase';
import { BlogPost, useGetBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BlogPostDisplay } from './BlogPost';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const BlogPosts: React.FC = () => {
  const { posts, loading, error } = useGetBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!posts?.length) {
    return <p>No posts found</p>;
  }

  return (
    <section>
      <h2>Blog posts</h2>
      <ul>
        {posts.map((post: BlogPost) => (
          <BlogPostDisplay key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
