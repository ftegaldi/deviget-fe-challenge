import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '@slices/postsSlice';
import settingsSlice from '@slices/settingsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    settings: settingsSlice,
  },
  devTools: true,
});
