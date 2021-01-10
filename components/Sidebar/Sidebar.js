import { connect } from 'react-redux';
import { selectPosts } from '@slices/postsSlice';

import PostCard from 'components/PostCard';

import { SidebarContainer, TopSection, SidebarBody, BottomSection, ShowHideButton } from './styled';

const Sidebar = ({ displayedPosts }) => {
  return (
    <SidebarContainer>
      <TopSection>
        <h1>Reddit Posts</h1>
        <ShowHideButton>{'<<'}</ShowHideButton>
      </TopSection>
      <SidebarBody>
        {displayedPosts.map((post, index) => (
          <PostCard
            key={post.id}
            postData={post}
            lastCard={index === displayedPosts.length - 1 ? false : true}
          />
        ))}
      </SidebarBody>
      <BottomSection>
        <button>Dismiss All</button>
      </BottomSection>
    </SidebarContainer>
  );
};

const mapStateToProps = (state) => ({
  displayedPosts: state.posts.displayedPosts,
});

export default connect(mapStateToProps)(Sidebar);
