import { connect } from 'react-redux';

import Post from 'components/Post';

import { Container } from './styled';

const PostViewer = ({ selectedPost }) => {
  return (
    <Container>
      <Post post={selectedPost} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedPost: state.posts.selectedPost,
});

export default connect(mapStateToProps)(PostViewer);
