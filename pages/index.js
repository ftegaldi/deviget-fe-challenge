import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from 'components/Sidebar'
import PostViewer from 'components/PostViewer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      
      <PostViewer />
      
    </div>
  )
}
