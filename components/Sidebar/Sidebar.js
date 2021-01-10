import PostCard from 'components/PostCard';

import mockedData from 'mock/mockedData';

import { SidebarContainer, TopSection, SidebarBody, BottomSection, ShowHideButton } from './styled';

const Sidebar = () => {
  const { processedPosts } = mockedData;
  return (
    <SidebarContainer>
      <TopSection>
        <h1>Reddit Posts</h1>
        <ShowHideButton>{'<<'}</ShowHideButton>
      </TopSection>
      <SidebarBody>
        {processedPosts.map((post, index) => (
          <PostCard
            key={post.id}
            postData={post}
            lastCard={index === processedPosts.length - 1 ? false : true}
          />
        ))}
      </SidebarBody>
      <BottomSection>
        <button>Dismiss All</button>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
