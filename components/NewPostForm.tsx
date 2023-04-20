import { useState } from 'react';

import {addBlogPost, NewBlogPost} from '@/firebase/addData';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: NewBlogPost = {
      title,
      content,
      author    
    };

    try {
      await addBlogPost(newPost)
      console.log(`New blog post ${title} added to Firestore!`);
    } catch (error) {
      console.error('Error adding blog post:', error);
    }

    // Reset the form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
