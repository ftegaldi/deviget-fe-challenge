import styles from '../styles/Home.module.css';
import Sidebar from 'components/Sidebar'
import PostViewer from 'components/PostViewer'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsReducer, { loadPosts, selectPosts } from '@slices/postsSlice';

const RedditTopPostsHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function dispatchLoadPosts() {
      await dispatch(loadPosts());
    }
    dispatchLoadPosts();
  }, [dispatch]);

  return (
    <main className={styles.layout}>
      <Sidebar />
      <PostViewer />
    </main>
  );
};

export default RedditTopPostsHome;