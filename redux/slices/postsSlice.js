import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

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
      state.selectedPost = action.payload;
    },
    dismissPost: (state, action) => {
      const position = state.displayedPosts.findIndex((post) => post.id === action.payload.id);
      state.dismissedPosts.push(action.payload);
      state.displayedPosts.splice(position, 1);
    },
    dismissAllPosts: (state) => {
      state.displayedPosts = [];
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

export const { selectPost, dismissPost, dismissAllPosts } = postsSlice.actions;

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