import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-stor";
import Welmsg from "./Welmsg";

function PostList() {
  const { postList ,addinitialPost} = useContext(PostListData);

  const hendlegetpost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) =>{
        addinitialPost(data.posts)
      });
  };

  return (
    <div>
      {postList.length === 0 && <Welmsg onGetPostClick={hendlegetpost} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
