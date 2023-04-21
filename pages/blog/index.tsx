import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import NewPostForm from '@/components/NewPostForm';
import { BlogPosts } from '@/components/BlogPosts';
// import { Button } from '@/components/button'

// const inter = Inter({ subsets: ['latin'] })

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <BlogPosts />
    </>
  )
}

export default Blog;