import styles from '../styles/Home.module.css';
import Sidebar from 'components/Sidebar'
import PostViewer from 'components/PostViewer'

export default function Home() {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <PostViewer />
    </main>
  );
}
