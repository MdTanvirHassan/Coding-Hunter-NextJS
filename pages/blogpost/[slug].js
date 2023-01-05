import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <div className={styles.main}>{slug}</div>
}

export default Slug