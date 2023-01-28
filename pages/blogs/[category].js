import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'
import axios from "axios";


import { useState,useEffect } from "react";

function BlogDetailPage({post}) {
    const router = useRouter();
    const {category} = router.query;

  if(router.isFallback){
    return <p>Loading...</p>
  }

console.log("good",post)
  return (
    <div className={styles.main}>
      
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      
    </div>
  )
}

export default BlogDetailPage;

export const getStaticPaths = async()=>{
  return{
    paths:[
      {params:{category:'1'}},
      {params:{category:'2'}},
      
    ],
    fallback:true
  }
}

export const getStaticProps = async(context)=>{
const {params} = context;
console.log("hi",params);
const res = await axios.get(`http://localhost:3000/api/blogs/${params.category}`);

if(!res.data){
  return{
    notFound:true,
  }
}
return{
  props:{
    post:res.data
  }
}
}