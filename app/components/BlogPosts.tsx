import { deletePost } from '@/firebase';
import { BlogPost, useGetBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const BlogPosts: React.FC = () => {
  const { posts, loading, error } = useGetBlogPosts();

  const handleEdit = (p: BlogPost) => {
    alert(`Edit ${p.title}`);
  };

  const handleDelete = (p: BlogPost) => {
    if (confirm(`Are you sure you want to delete ${p.title}?`)) {
      deletePost(p);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!posts?.length) {
    return <p>No posts found</p>;
  }

  return (
    <section>
      <h2>Blog posts</h2>
      <ul>
        {posts.map((post: BlogPost, i) => (
          <div key={post.id}>
            {/* TODO: */}
            {/* @ts-ignore */}
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            <button
              aria-label={`Edit ${post.title}`}
              onClick={() => handleEdit(post)}>
              <FaEdit aria-hidden />
            </button>
            <button
              aria-label={`Delete ${post.title}`}
              onClick={() => handleDelete(post)}>
              <FaTrashAlt aria-hidden />
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
};
