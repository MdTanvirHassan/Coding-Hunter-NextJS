import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className={styles.mainNav}>
      
      <ul className={styles}>
       <Link href="/"> <li className={styles.thirteen}><span >HuntingCoder </span></li></Link>
       <Link href="/"> <li>Home</li></Link>
       <Link href="/blog"> <li>Blogs</li></Link>
       <Link href="/about"> <li>About</li></Link>
       <Link href="/contract"> <li>Contracts</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar