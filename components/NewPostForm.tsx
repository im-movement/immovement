import { useState } from 'react';
import 'firebase/firestore';
import {addData, addBlogPost} from '@/firebase/addData';


interface BlogPost {
  title: string;
  content: string;
  author: string;
}

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPost: BlogPost = {
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
