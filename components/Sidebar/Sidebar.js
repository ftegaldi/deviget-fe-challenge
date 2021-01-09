import PostCard from 'components/PostCard';

import { SidebarContainer, TopSection, SidebarBody, BottomSection, ShowHideButton } from './styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopSection>
        <h2>Reddit Posts</h2>
        <ShowHideButton>{'<<'}</ShowHideButton>
      </TopSection>
      <SidebarBody>
        {/* TODO: cards go here*/}
        <PostCard />
      </SidebarBody>
      <BottomSection>
        <button>Dismiss All</button>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
