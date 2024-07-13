import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-stor";
// const {addPost}= useContext(PostList)

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdelement = useRef();
  const postTitalelement = useRef();
  const postbodyelement = useRef();
  const reactionselement = useRef();
  const tagselement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdelement.current.value;
    const postTitle = postTitalelement.current.value;
    const postBody = postbodyelement.current.value;
    const reactions = reactionselement.current.value;
    const tags = tagselement.current.value.split(" ");

    userIdelement.current.value = " "
    postTitalelement.current.value = " "
    postbodyelement.current.value = " "
    reactionselement.current.value = " "
    tagselement.current.value =" "
    // new concept only

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then(post => addPost(post));
      // .then(console.log);

    // addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <div>
      <form className="createpost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter your User id
          </label>
          <input
            type="text"
            ref={userIdelement}
            className="form-control"
            id="userid"
            placeholder="Your user Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tital" className="form-label">
            post tital
          </label>
          <input
            type="text"
            ref={postTitalelement}
            className="form-control"
            id="tital"
            placeholder="how are you filling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            post content
          </label>
          <textarea
            rows={4}
            type="text"
            ref={postbodyelement}
            className="form-control"
            id="tital"
            placeholder="tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of reaction
          </label>
          <input
            type="text"
            ref={reactionselement}
            className="form-control"
            id="reactions"
            placeholder="how many people reacted this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            enter your tags using space
          </label>
          <input
            type="text"
            ref={tagselement}
            className="form-control"
            id="tags"
            placeholder=""
          />
        </div>

        <button type="submit" className="btn btn-primary">
          post
        </button>
        <button type="reset" value="clear" className="btn btn-primary clear">
          clear
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
