import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

const reducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        (post._id === action.payload._id ? action.payload : post));
    //REMOVE ALL THE POSTS EXCEPT THE ONE THAT THE ID IS EQUAL TO THE PAYLOAD.
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducers;
