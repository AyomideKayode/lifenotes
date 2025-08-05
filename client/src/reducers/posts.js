// src/reducers/posts.js

// const reducers = (state = { posts: [] }, action) => {
export default (posts = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case 'FETCH_ALL':
      // return { ...state, posts: action.payload };
      return action.payload;
    case 'CREATE':
      // return { ...state, posts: [...state.posts, action.payload] };
      return [...posts, action.payload];
    // case 'DELETE':
    //   return {
    //     ...state,
    //     posts: state.posts.filter((post) => post._id !== action.payload),
    //   };
    default:
      return posts;
  }
};
