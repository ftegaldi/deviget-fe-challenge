import { connect } from 'react-redux';

import Post from 'components/Post';

import { Container } from './styled';

const PostViewer = ({ selectedPost, isSidebarOpen }) => {
  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <Post post={selectedPost} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedPost: state.posts.selectedPost,
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(PostViewer);
