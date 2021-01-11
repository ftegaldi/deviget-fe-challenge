import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { selectPost, dismissPost } from '@slices/postsSlice';

import { getRelativeTime } from '@helpers';

import { CardContainer, ReadIndicator, DismissButton, TopSection, MiddleSection, BottomSection } from './styled';

const PostCard = ({ postData, lastCard }) => {
  // const [isRead, setIsRead] = useState(false);
  const { id, title, author, created_at, thumbnail, comments, isRead } = postData;
  const dispatch = useDispatch();

  const onSelectPost = () => {
    dispatch(selectPost(postData));
  };

  const onDismissPost = () => {
    dispatch(dismissPost(postData));
  };

  return (
    <CardContainer lastCard={lastCard}>
      <TopSection>
        <ReadIndicator isRead={isRead} />
        <h2>{author}</h2>
        <p>{getRelativeTime(created_at)}</p>
      </TopSection>
      <MiddleSection onClick={onSelectPost}>
        <img src={thumbnail} />
        <h3>{title}</h3>
        <span class="material-icons">arrow_forward_ios</span>
      </MiddleSection>
      <BottomSection>
        <DismissButton onClick={onDismissPost}>
          <span class="material-icons">cancel</span>
          <p>Dismiss Post</p>
        </DismissButton>
        <p>
          {comments} {comments === 1 ? 'comment' : 'comments'}
        </p>
      </BottomSection>
    </CardContainer>
  );
};

export default PostCard;
