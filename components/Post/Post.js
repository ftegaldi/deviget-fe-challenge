import { PostContainer } from './styled';

const Post = ({ post }) => {
  const { title, url, author } = post;
  return (
    <PostContainer>
      <h4>{author}</h4>
      <img src={url} />
      <p>{title}</p>
    </PostContainer>
  );
};

export default Post;
