import { BlogPost, useGetBlogPosts } from '@/firebase/getData';
import { BlogPostDisplay } from './BlogPost';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const BlogPosts: React.FC = () => {
  const { posts, loading, error } = useGetBlogPosts();

  const showPosts = posts?.filter(p => p.hidden !== true);

  console.log({ posts });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;

  return (
    <section>
      <h2>Blog posts</h2>
      <ul>
        {showPosts?.length ? (
          showPosts.map((post: BlogPost) => (
            <BlogPostDisplay key={post.id} post={post} />
          ))
        ) : (
          <p>No posts found</p>
        )}
      </ul>
    </section>
  );
};
