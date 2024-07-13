import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const posrListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.paylode.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.paylode, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, DispatchPostList] = useReducer(
    posrListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userid, postTitale, postbody, reactions, tags) => {
    DispatchPostList({
      type: "ADD_POST",
      paylode: {
        id: Date.now,
        tital: postTitale,
        body: postbody,
        reaction: reactions,
        userid: userid,
        tags: tags,
      },
    });
  };
  const deletePost = (postid) => {
    DispatchPostList({
      type: "DELETE_POST",
      paylode: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  
];
export default PostListProvider;
