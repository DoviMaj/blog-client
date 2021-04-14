import React from "react";
import style from "../styles/Post.module.scss";

function Post({ post }) {
  const date = new Date(post.date);
  const date_formated = date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <a href={`/posts/${post._id}`} className={style.post} key={post._id}>
      <div>
        <h1>{post.author_name}</h1>
        <p>{post.title}</p>
      </div>
      <div>
        <p style={{ marginBottom: "20px" }}>{date_formated}</p>
        <button style={{ width: "100%" }}>View Post</button>
      </div>
    </a>
  );
}

export default Post;
