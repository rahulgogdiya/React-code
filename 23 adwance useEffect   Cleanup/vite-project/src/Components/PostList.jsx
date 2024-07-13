import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-stor";
import Welmsg from "./Welmsg";
import Lodindig from "./Lodindig";

function PostList() {
  const { postList, addinitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  // 1 using useState
  // const [Datafetch, setDataFetch] = useState(false);
  // if (!Datafetch) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addinitialPost(data.posts);
  //     });
  //   setDataFetch(true);
  // }

  //2nd using useEffect
  useEffect(() => {
    //Adwance useEffect
    const controller = new AbortController(); 
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts",(signal))
      .then((res) => res.json())
      .then((data) => {
        addinitialPost(data.posts);
        setFetching(false);
      });

      //clenUp
      return ()=>{
        console.log("clean up ")
        controller.abort()
      }
  }, []);

  return (
    <div>
      {fetching && <Lodindig/>}
      {!fetching && postList.length === 0 && <Welmsg />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
