import { connect, useDispatch } from 'react-redux';
import { useTransition } from 'react-spring';

import PostCard from 'components/PostCard';
import { SidebarContainer, TopSection, SidebarBody, BottomSection, SidebarMessage } from './styled';
import ToggleSidebarButton from 'components/ToggleSidebarButton';
import UndoDismissButton from 'components/UndoDismissButton/UndoDismissButton';

import { dismissAllPosts } from '@slices/postsSlice';


const Sidebar = ({ displayedPosts, isSidebarOpen, loading }) => {
  const dispatch = useDispatch();

  const onDismissAllPosts = () => {
    dispatch(dismissAllPosts());
  };

  const sidebarTransition = useTransition(isSidebarOpen, null, {
    from: { transform: 'translate3d(-100%, 0 ,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
  })

  return sidebarTransition.map(
    ({ item, key, props }) =>
      item ? (
        <SidebarContainer style={props} key={key}>
          <TopSection>
            <h1>Reddit Posts</h1>
            <UndoDismissButton />
            <ToggleSidebarButton icon="close" isInSidebar />
          </TopSection>
          <SidebarBody>
            {displayedPosts.length
              ? displayedPosts.map((post, index) => (
                  <PostCard
                    key={post.id}
                    postData={post}
                    lastCard={index === displayedPosts.length - 1 ? false : true}
                  />
                ))
              : <SidebarMessage>
                {loading === 'loading' ? 'loading...' : 'all posts dismissed!'}
                </SidebarMessage>}
          </SidebarBody>
          <BottomSection>
            <button onClick={onDismissAllPosts}>Dismiss All</button>
          </BottomSection>
        </SidebarContainer>
      ) : null
  );
};

const mapStateToProps = (state) => ({
  displayedPosts: state.posts.displayedPosts,
  loading: state.posts.loading,
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(Sidebar);
