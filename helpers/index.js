////////////////////////////
// API endpoint helpers
////////////////////////////

export const processTopPostsData = (responseData) => {
  return responseData.data.children.map((post) => {
    return {
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      created_at: post.data.created_utc,
      thumbnail: post.data.thumbnail,
      image_src: post.data.url,
      comments: post.data.num_comments,
      is_video: post.data.is_video,
      isRead: false,
      isGif: post.data.url.includes('gifv'),
      isExternal: !post.data.url_overridden_by_dest.includes('redd'),
    };
  });
};

////////////////////////////
// Component helpers
////////////////////////////

export const getRelativeTime = (utcTime) => {
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  const elapsed = utcTime;

  const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow', numeric: 'auto' });

  const calculateRelTime = (elapsedTime) => {
    for (let u in units) {
      if (Math.abs(elapsedTime) > units[u] || u === 'second') {
        return rtf.format(Math.round(elapsedTime / units[u]), u);
      }
    }
  };

  return calculateRelTime(elapsed);
};

////////////////////////////
// Redux helpers
////////////////////////////

export const getPostPosition = (state, payload) => {
  return state.findIndex((post) => post.id === payload.id);
}