import Sidebar from 'components/Sidebar';
import PostViewer from 'components/PostViewer'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import postsReducer, { loadPosts, selectPosts } from '@slices/postsSlice';
import ToggleSidebarButton from 'components/ToggleSidebarButton';

const RedditTopPostsHome = ({ isSidebarOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function dispatchLoadPosts() {
      await dispatch(loadPosts());
    }
    // there might be a cleaner way of doing this...
    if (localStorage.getItem('state')) {
      return;
    } else {
      dispatchLoadPosts();
    }
  }, [dispatch]);

  return (
    <main>
      <Sidebar />
      <ToggleSidebarButton icon="view_list"  />
      <PostViewer />
    </main>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(RedditTopPostsHome);