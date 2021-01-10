import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '@slices/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    settings: {},
  },
  devTools: true,
});
