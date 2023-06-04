import { useState } from 'react';

import { addBlogPost, NewBlogPost } from '@/firebase/addData';
import { Input } from './Input';
import Router from 'next/router';

export const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: NewBlogPost = {
      title,
      content,
      author,
    };

    await addBlogPost(newPost);

    // reset form fields
    setTitle('');
    setContent('');
    setAuthor('');
    // Router.reload();
  };

  const handleDraft = async () => {
    const newPost: NewBlogPost = {
      title,
      content,
      author,
      draft: true,
    };

    await addBlogPost(newPost);

    // reset form fields
    setTitle('');
    setContent('');
    setAuthor('');
    // Router.reload();
  };

  return (
    <section>
      <h2>Add new blog post</h2>
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
        <button onClick={handleDraft}>Save as draft</button>
        <button type="submit">Publish</button>
      </form>
    </section>
  );
};
