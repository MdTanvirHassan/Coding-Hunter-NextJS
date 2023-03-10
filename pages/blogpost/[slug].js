import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter()
  // useEffect(() => {
    
  //   if(!router.isReady) return;
  // const { slug } = router.query
  
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((parsed) => {
  //      // console.log(parsed);
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return <div className={styles.container}>
    <div className={styles.main} key={blog.slug}>
    <h1> {blog && blog.title}</h1> <br /> <br />
    <p>{blog && blog.content}</p>
    </div>
    </div>
};

export async function getServerSideProps(context) {
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json();
      
  return {
    props: {myBlog}, 
  }
}

export default Slug