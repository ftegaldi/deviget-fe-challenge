const axios = require('axios');
const { processTopPostsData } = require('@helpers');

const REDDIT_URL = 'https://reddit.com/';

const getTopPosts = async () => {
  try {
    let res = await axios.get(`${REDDIT_URL}top.json?limit=50`);
    if (!res.data.children.length) {
      res = await axios.get(`${REDDIT_URL}r/memes/top.json?limit=50`);
      return res.data;
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default async (req, res) => {
  try {
    let posts = await getTopPosts();
    let processedPosts = processTopPostsData(posts);
    res.status(200).json({ processedPosts });
  } catch (error) {
    res.status(500).json({ error });
  }
};
