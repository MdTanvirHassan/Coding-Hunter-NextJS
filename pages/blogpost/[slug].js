import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <div className={styles.container}>
    <div className={styles.main}>
    <h1>Title About {slug}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui non deserunt. 
      Tempore fugit ratione necessitatibus, soluta similique quisquam? 
      Hic explicabo inventore quisquam dolores cupiditate rerum maiores quo sunt error voluptatum dolor tempore sapiente similique, 
      quam, modi aliquam sint laborum, distinctio id! Voluptatum, accusamus illo!</p>
    </div>
    </div>
}

export default Slug