import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <main className={styles.main}>
        <div className={`${styles.blog} ${styles}`}>
          <h1> Blogs to Preview </h1>
          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <Link
                  href={`/blogpost/${blogitem.slug}`}
                  className={`${styles.description} ${styles.cursor} `}>
                  <h2 className={styles.blogItem}>{blogitem.title}</h2>
                  <p>{blogitem.content.substr(0,120)}...</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json();
      
  return {
    props: {allBlogs}, 
  }
}

export default Blog;
