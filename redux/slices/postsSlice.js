import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

import { getPostPosition } from '@helpers';

export const loadPosts = createAsyncThunk('posts/loadPosts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/top');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    displayedPosts: [],
    dismissedPosts: [],
    selectedPost: {},
    loading: 'idle',
    error: 'none',
  },
  reducers: {
    selectPost: (state, action) => {
      let position = getPostPosition(state.displayedPosts, action.payload);
      state.selectedPost = action.payload;
      state.displayedPosts[position].isRead = true;
    },
    dismissPost: (state, action) => {
      let position = getPostPosition(state.displayedPosts, action.payload);
      state.dismissedPosts.push({  ...action.payload, lastPosition: position  });
      state.displayedPosts.splice(position, 1);
    },
    dismissAllPosts: (state) => {
      state.posts.map((post) => (post.isDisplayed = false));
      state.displayedPosts = [];
    },
    undoDismissPost: (state) => {
      if (!state.dismissedPosts.length) return;
      let dismissedPost = state.dismissedPosts.pop();
      state.displayedPosts.splice(dismissedPost.lastPosition, 0, dismissedPost)
    },
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.posts = [];
      state.loading = 'loading';
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.processedPosts;
      state.displayedPosts = action.payload.processedPosts;
      state.loading = 'finished';
    },
    [loadPosts.rejected]: (state, action) => {
      state.loading = 'error';
      state.error = action.payload.error;
    },
  },
});

export const { selectPost, dismissPost, dismissAllPosts, undoDismissPost } = postsSlice.actions;

export const selectPosts = createSelector(
  (state) => ({
    posts: state.posts.posts,
    displayedPosts: state.posts.displayedPosts,
    error: state.posts.error,
    loading: state.posts.loading,
  }),
  (state) => state
);

export default postsSlice.reducer;
