import Link from 'next/link';
import { Container } from 'components/PostViewer/styled';

const NotFound = () => {
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
      <br />
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </Container>
  );
};

export default NotFound;
