import { useDeletePost } from '@/firebase';
import { BlogPost } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

interface BlogPostProps {
  post: BlogPost;
}

export const BlogPostDisplay: React.FC<BlogPostProps> = props => {
  const { post } = props;
  const { loading, error, deletePost } = useDeletePost(post);

  const handleEdit = (p: BlogPost) => {
    alert(`Edit ${p.title}`);
  };

  const handleDelete = (p: BlogPost) => {
    if (confirm(`Are you sure you want to delete ${p.title}?`)) {
      deletePost();
    }
  };

  return (
    <div>
      {post.draft && (
        <span style={{ backgroundColor: 'dodgerblue', color: 'white' }}>
          Draft
        </span>
      )}
      {/* TODO: */}
      {/* @ts-ignore */}
      <Link target="_blank" href={`/blog/${post.id}`}>
        {post.title}
      </Link>
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
  );
};
