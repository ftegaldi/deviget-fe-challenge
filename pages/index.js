import Sidebar from 'components/Sidebar';
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
    //there might be a cleaner way of doing this...
    if (localStorage.getItem('state')) {
      return;
    } else {
      dispatchLoadPosts();
    }
  }, [dispatch]);

  return (
    <main>
      <Sidebar />
      <PostViewer />
    </main>
  );
};

export default RedditTopPostsHome;