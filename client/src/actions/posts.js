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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data }); // Dispatch action to add the new post to the state
  } catch (error) {
    console.error('Error creating post:', error); // Log any errors that occur during the post creation
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: 'UPDATE', payload: data }); // Dispatch action to update the post in the state
  } catch (error) {
    console.error('Error updating post:', error); // Log any errors that occur during the post update
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id }); // Dispatch action to remove the post from the state
  } catch (error) {
    console.error('Error deleting post:', error); // Log any errors that occur during the post deletion
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: 'UPDATE', payload: data }); // Dispatch action to update the post in the state
  } catch (error) {
    console.log(error);
  }
};
