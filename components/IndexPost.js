import React from "react";
import style from "../styles/Post.module.scss";

function Post({ post }) {
  return (
    <div className={style.post} key={post._id}>
      <a href={`/posts/${post._id}`}>
        <h1>{post.author_name}</h1>
        <a href={`/posts/${post._id}`}>{post.title}</a>
        <p>{post.text}</p>
      </a>
    </div>
  );
}

export default Post;
