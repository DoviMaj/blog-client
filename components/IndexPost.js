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
    <li className={style.post} key={post._id}>
      <a
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: "0",
          position: "relative",
        }}
        href={`/posts/${post._id}`}
      >
        <h1>{post.author_name}</h1>
        <p>{post.title}</p>
        <p>{date_formated}</p>
        <button style={{ position: "absolute", top: "195px", width: "100%" }}>
          View Post
        </button>
      </a>
    </li>
  );
}

export default Post;
