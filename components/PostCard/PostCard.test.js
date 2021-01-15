import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCard from './PostCard';

describe('PostCard tests', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      postData: {
        title: 'Card test title',
        author: 'Card test author',
        created_at: Date.now(),
        thumbnail:
          'https://b.thumbs.redditmedia.com/wcHeW_Tv08zsV8gwRoPhyCUU9yduvDldYWzJq2F86hM.jpg',
        comments: '12345',
        isRead: false,
        image_src: 'https://i.redd.it/1lprd5j4c4a61.jpg',
      },
      lastCard: false,
    };
  });

  test('Should render all props', () => {
    const { getByText, getByAltText } = render(<PostCard {...expectedProps} />);

    const title = getByText(expectedProps.postData.title);
    const author = getByText(expectedProps.postData.author);
    const created_at = getByText(/hours ago/);
    const thumbnail = getByAltText(expectedProps.postData.title);
    const comments = getByText(expectedProps.postData.comments);

    expect(title).toBeVisible();
    expect(author).toBeVisible();
    expect(created_at).toBeVisible();
    expect(thumbnail).toBeVisible();
    expect(comments).toBeVisible();
  });
});
