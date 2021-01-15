import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from 'components/Sidebar';
import PostViewer from 'components/PostViewer';
import ToggleSidebarButton from 'components/ToggleSidebarButton';
import SettingsButton from 'components/SettingsButton';
import Modal from 'components/modal/Modal';

import { loadPosts } from '@slices/postsSlice';

const RedditTopPostsHome = () => {
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
      <ToggleSidebarButton icon="view_list" />
      <SettingsButton />
      <PostViewer />
      <Modal>
        <div>ESTOY EN EL MODAL</div>
      </Modal>
    </main>
  );
};

export default RedditTopPostsHome;