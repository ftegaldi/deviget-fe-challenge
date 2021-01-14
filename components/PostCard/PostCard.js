import Image from 'next/image'

import { useDispatch } from 'react-redux';

import { selectPost, dismissPost } from '@slices/postsSlice';
import { toggleSidebar } from '@slices/settingsSlice';

import { CardContainer, DismissButton, MiddleSection, BottomSection } from './styled';

import { useWindowSize } from '@helpers';

import TopSection from './TopSection';
import image from 'next/image'; // -------------------------------------------------

const PostCard = ({ postData, lastCard }) => {
  const {
    id,
    title,
    author,
    created_at,
    thumbnail,
    comments,
    isRead,
    image_src,
    isDisplayedInSidebar,
  } = postData;
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const onSelectPost = () => {
    dispatch(selectPost(postData));
    if (width <= 768) {
      dispatch(toggleSidebar());
    }
  };

  const onDismissPost = () => {
    dispatch(dismissPost(postData));
  };

  return (
    <CardContainer lastCard={lastCard}>
      <TopSection isRead={isRead} author={author} created_at={created_at} viewportWidth={width} />
      <MiddleSection onClick={onSelectPost}>
        {thumbnail === 'default' ? (
          <Image src={'/link-thumb.png'} width="200" height="139" />
        ) : (
          <img src={thumbnail === 'nsfw' ? image_src : thumbnail} />
        )}
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
