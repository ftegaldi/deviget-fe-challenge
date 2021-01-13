import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '@slices/postsSlice';
import settingsSlice from '@slices/settingsSlice';
import { loadState, saveState } from '@helpers';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    posts: postsReducer,
    settings: settingsSlice,
  },
  devTools: true,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;