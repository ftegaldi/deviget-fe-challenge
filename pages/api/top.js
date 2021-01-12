// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const { processTopPostsData } = require('@helpers');

import mockedPosts from 'mock/mockedData';

const getTopPosts = async () => {
  try {
    // let res = await axios.get('https://reddit.com/top.json?limit=50');
    // return res.data;
    return mockedPosts;
  } catch (error) {
    console.error(error);
  }
};

export default async (req, res) => {
  try {
    // let posts = await getTopPosts();
    // let processedPosts = processTopPostsData(posts);
    // res.status(200).json({ processedPosts });
    res.status(200).json(mockedPosts);
  } catch (error) {
    res.status(500).json({ error });
  }
};
