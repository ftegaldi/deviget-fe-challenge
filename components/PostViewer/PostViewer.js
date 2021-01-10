import Post from 'components/Post';

import { Container } from './styled';

import mockedPost from 'mock/mockedPost';

const PostViewer = () => {
  return (
    <Container>
      <Post post={mockedPost} />
    </Container>
  );
};

export default PostViewer;
