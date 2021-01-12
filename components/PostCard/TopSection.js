import { ReadIndicator, TopSectionContainer } from './styled';

import { getRelativeTime } from '@helpers';

const TopSection = ({ isRead, author, created_at, viewportWidth }) => {
  return (
    <>
      {viewportWidth < 768 ? (
        <TopSectionContainer>
          <ReadIndicator isRead={isRead}>
            <span class="material-icons">new_releases</span>
          </ReadIndicator>
          <div>
            <h2>{author}</h2>
            <p>{getRelativeTime(created_at)}</p>
          </div>
        </TopSectionContainer>
      ) : (
        <TopSectionContainer>
          <ReadIndicator isRead={isRead}>
            <span class="material-icons">new_releases</span>
          </ReadIndicator>
          <h2>{author}</h2>
          <p>{getRelativeTime(created_at)}</p>
        </TopSectionContainer>
      )}
    </>
  );
};

export default TopSection;
