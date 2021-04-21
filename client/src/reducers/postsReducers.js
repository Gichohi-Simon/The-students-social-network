import { CREATE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

const reducers = (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default reducers;
