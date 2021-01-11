import { connect, useDispatch } from 'react-redux';
import { dismissAllPosts } from '@slices/postsSlice';
import { toggleSidebar } from '@slices/settingsSlice';

import PostCard from 'components/PostCard';

import { SidebarContainer, TopSection, SidebarBody, BottomSection, ShowHideButton } from './styled';

const Sidebar = ({ displayedPosts, isSidebarOpen }) => {
  const dispatch = useDispatch();

  const onDismissAllPosts = () => {
    dispatch(dismissAllPosts());
  };

  const onToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isSidebarOpen ? (
        <SidebarContainer>
          <TopSection>
            <h1>Reddit Posts</h1>
            <ShowHideButton onClick={onToggleSidebar}>
              <span class="material-icons">close</span>
            </ShowHideButton>
          </TopSection>
          <SidebarBody>
            {displayedPosts.length ? (
              displayedPosts.map((post, index) => (
                <PostCard
                  key={post.id}
                  postData={post}
                  lastCard={index === displayedPosts.length - 1 ? false : true}
                />
              ))) : (
                'loading...')
            }
          </SidebarBody>
          <BottomSection>
            <button onClick={onDismissAllPosts}>Dismiss All</button>
          </BottomSection>
        </SidebarContainer>
      ) : (
        (
        <ShowHideButton isSidebarOpen={isSidebarOpen} onClick={onToggleSidebar}>
          <span class="material-icons">view_list</span>
        </ShowHideButton>
      )
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  displayedPosts: state.posts.displayedPosts,
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(Sidebar);
