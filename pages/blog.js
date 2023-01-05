import Link from 'next/link';
import React from 'react'
import styles from '../styles/Blog.module.css'

const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
      <div className={`${styles.blog} ${styles}`}>
       
        <h1 > Blogs to Preview </h1>
        <Link href={`/blogpost/learn-nextJS`} className={`${styles.description} ${styles.cursor} `}>
          <div >
            <h3 className={styles.blogItem}>How to Learn Next Js In 2023</h3>
            <p >React Framework for Production</p>
          </div>
        </Link>
        
        <Link href={`/blogpost/learn-nodeJS`} className={`${styles.description} ${styles.cursor} `}>
          <div >
             <h3 className={styles.blogItem}>How to Learn Node Js In 2023</h3>
              <p>React Framework for Production</p>
          </div>
        </Link>
          
        <Link href={`/blogpost/learn-MERN-Stack`} className={`${styles.description} ${styles.cursor} `}>
            <div >
            <h3 className={styles.blogItem}>How to Learn MERN Stack In 2023</h3>
            <p>React Framework for Production</p>
            </div>
        </Link>
        </div>
        </main>
    </div>
  )
}

export default Blog;