import Image from 'next/image';
import { PostContainer } from './styled';

const Post = ({ post }) => {
  const { title, image_src, author, is_video, thumbnail, isGif, isExternal } = post;
  return (
    <PostContainer>
      <h4>{author}</h4>
      <a href={image_src} target="blank">
        {thumbnail === 'default' ? (
          <Image src={'/link-thumb.png'} width="200" height="139" />
        ) : (
          <img src={is_video || isGif || isExternal ? thumbnail : image_src} />
        )}
      </a>
      <p>{title}</p>
    </PostContainer>
  );
};

export default Post;
