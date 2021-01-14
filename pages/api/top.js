// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const { processTopPostsData } = require('@helpers');

const getTopPosts = async () => {
  try {
    let res = await axios.get('https://reddit.com/r/memes/top.json?limit=50');
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
