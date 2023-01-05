import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Hunter - NextJS App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          .red{
            color:red;
          }
        `}
      </style>
      
      <main className={styles.main}>
        <h1 className={styles.marginY}>Hunting Coder</h1>
        <div >
          <Image src="/coder.jpg" alt="" width={450} height={200} className={styles.imgArea}/>
        </div>
        <div className={styles.marginY}>
        <p >A blog for Hunting Coder by Hunting Coder</p>
        </div>
        <div className={`${styles.blog} ${styles}`}>
        <h2 >Popular Blogs</h2>
        <div className={`${styles.description} ${styles.cursor} `}>
          <h3 className={styles.blogItem}>How to Learn Next Js In 2023</h3>
          <p >React Framework for Production</p>
        </div>
        
          <div className={`${styles.description} ${styles.cursor} `}>
             <h3 className={styles.blogItem}>How to Learn Node Js In 2023</h3>
              <p>React Framework for Production</p>
          </div>
        
        <div className={`${styles.description} ${styles.cursor} `}>
        <h3 className={styles.blogItem}>How to Learn MERN Stack In 2023</h3>
        <p>React Framework for Production</p>
        </div>
  
        </div>

        {/* <div className={styles.center}> 
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
