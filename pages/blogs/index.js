import BlogList from '../../components/blog/BlogList'
import styles from '../../styles/Home.module.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Blog() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts();
    getElementById(2)
  },[]);

  const fetchPosts = async()=>{
    const res = await axios.get('http://localhost:3000/api/blogs')
    setPosts(res.data);
    console.log("all Posts",posts)
  }

  const getElementById = async(id)=>{
    const singlePost = posts.filter(post=>post.id===id)
    console.log("single id",singlePost)
  }

  return (
    <div className={styles.container}>
        <div className={styles.main}>
        <h1>Blogs</h1>
        <BlogList posts={posts}/>
        </div>
    </div>
  )
}

export default Blog