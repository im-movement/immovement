import { NewBlogPost } from '@/firebase/addData';
import { getBlogPosts } from '@/firebase/getData';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const BlogPosts = () => {
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
        // TODO: fix type error
        // @ts-ignore
        setPosts(res);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEdit = () => {
    alert('Edit');
  };

  if (loading) return <div>Loading...</div>;

  if (!posts.length) {
    return <p>No posts found</p>;
  }

  if (error) return <div>{error.toString()}</div>;

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
              <button onClick={handleEdit}>
                <FaEdit />
              </button>
            </div>
          ))}
      </ul>
    </section>
  );
};
