import Link from 'next/link';
import styles from './Blog.module.css';
import axios from 'axios';
function BlogList({posts}) {

    
   
  return (
    
    <ul className={styles.blogList}>
        {posts.map(post=>(

        <li key={post.id}>
            <Link href={`/blogs/${post.id}`}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            </Link>
        </li>
        ))}
      
    </ul>
  )
}

export default BlogList;

// export  const getStaticSidePros = async ()=>{

//     const res = await axios.get('https://localhost:3000/api/blogs')


//     return{
//         props:{
//             blogs:res.data
//         }
//     }
// }
