import { connect } from 'react-redux';

import Post from 'components/Post';
import { useSpring } from 'react-spring';

import { Container } from './styled';

const PostViewer = ({ selectedPost, isSidebarOpen }) => {

  const { padding } = useSpring({
    from: { padding: '5vh 0 5vh 20vh' },
    padding: isSidebarOpen ? '5vh 0 5vh 20vw' : '5vh 0 5vh 0',
  });

  return (
    <Container isSidebarOpen={isSidebarOpen} style={{ padding: padding }}>
      <Post post={selectedPost} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedPost: state.posts.selectedPost,
  isSidebarOpen: state.settings.isSidebarOpen,
});

export default connect(mapStateToProps)(PostViewer);
