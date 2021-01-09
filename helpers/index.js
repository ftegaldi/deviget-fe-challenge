export const processTopPostsData = (responseData) => {
  return responseData.data.children.map((post) => {
    return {
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      created_at: post.data.created_utc,
      thumbnail: post.data.thumbnail,
      url: post.data.url,
      comments: post.data.num_comments,
    };
  });
};
