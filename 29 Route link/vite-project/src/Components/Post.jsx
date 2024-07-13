import React, { useContext } from "react";
import {AiFillDelete} from"react-icons/ai"
import {PostList} from "../store/post-list-stor";

function Post({ post }) {
  const {deletePost} = useContext(PostList)
  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">
            {post.tital}{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
              {/* {post.reaction} */}
              <AiFillDelete>
              </AiFillDelete>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary htag">{tag}</span>
          ))}

          <div className="alert alert-success reaction" role="alert">This post has been reacted by {post.reaction} people</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
