import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addinitialPost: () => {},
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
  } else if (action.type === "ADD_INITAL_POST") {
    newPostList = action.paylode.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, DispatchPostList] = useReducer(posrListReducer, []);
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
  const addinitialPost = (posts) => {
    DispatchPostList({
      type: "ADD_INITAL_POST",
      paylode: {
        posts,
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
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addinitialPost: addinitialPost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
