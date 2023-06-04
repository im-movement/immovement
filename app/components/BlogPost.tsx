import { editBlogPost, useDeletePost } from '@/firebase';
import { BlogPost } from '@/firebase/getData';
import Link from 'next/link';
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Modal } from './Modal';
import { Input } from './Input';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

interface BlogPostProps {
  post: BlogPost;
}

export const BlogPostDisplay: React.FC<BlogPostProps> = props => {
  const { post } = props;
  const { loading, error, deletePost } = useDeletePost(post);

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
      <EditBlogPost aria-label={`Edit ${post.title}`} {...props} />
      <button
        aria-label={`Delete ${post.title}`}
        onClick={() => handleDelete(post)}>
        <FaTrashAlt aria-hidden />
      </button>
    </div>
  );
};

const EditBlogPost: React.FC<BlogPostProps> = props => {
  const { post } = props;
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editBlogPost({ title, content, author, id: post.id });
  };

  const handleDraft = () => {
    //
  };

  return (
    <Modal title={<FaEdit aria-hidden />}>
      <h2>Edit post</h2>
      <form onSubmit={handleSubmit}>
        <Input title="Title" value={title} setValue={setTitle} required />
        <Input
          title="Content"
          type="textarea"
          value={content}
          setValue={setContent}
          required
        />
        <Input title="Author" value={author} setValue={setAuthor} required />
        <button onClick={handleDraft}>Mark as draft</button>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};
