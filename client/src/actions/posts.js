// src/actions/posts.js
import * as api from '../api';

// action creators: functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // Fetch posts from the API
    dispatch({ type: 'FETCH_ALL', payload: data }); // Dispatch action to update state with fetched posts
  } catch (error) {
    console.error('Error fetching posts:', error); // Log any errors that occur during the fetch
  }
};
