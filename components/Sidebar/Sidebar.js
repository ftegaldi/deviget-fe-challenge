import { connect, useDispatch } from 'react-redux';
import { dismissAllPosts, selectPosts } from '@slices/postsSlice';
import PostCard from 'components/PostCard';

import { SidebarContainer, TopSection, SidebarBody, BottomSection } from './styled';

import { useSpring, useTransition, config } from 'react-spring';
import ToggleSidebarButton from 'components/ToggleSidebarButton';
import { useEffect } from 'react';
import { CardContainer } from 'components/PostCard/styled';


const Sidebar = ({ displayedPosts, isSidebarOpen }) => {
  const dispatch = useDispatch();

  const onDismissAllPosts = () => {
    dispatch(dismissAllPosts());
  };

  const sidebarTransition = useTransition(isSidebarOpen, null, {
    from: { transform: 'translate3d(-100%, 0 ,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
  })

  return sidebarTransition.map(({item, key, props}) => (
    item &&
    <SidebarContainer style={props} key={key}>
      <TopSection>
        <h1>Reddit Posts</h1>
        <ToggleSidebarButton icon='close'/>
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
          : 'loading...'}
      </SidebarBody>
      <BottomSection>
        <button onClick={onDismissAllPosts}>Dismiss All</button>
      </BottomSection>
    </SidebarContainer>
  ))
};

const mapStateToProps = (state) => ({
  displayedPosts: state.posts.displayedPosts,
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(Sidebar);
