import { PostContainer } from './styled';

const Post = ({ post }) => {
  const { title, image_src, author } = post;
  return (
    <PostContainer>
      <h4>{author}</h4>
      <img src={image_src} />
      <p>{title}</p>
    </PostContainer>
  );
};

export default Post;
