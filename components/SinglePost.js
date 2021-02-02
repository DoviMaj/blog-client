import React from "react";
import styles from "../styles/SinglePost.module.scss";
import Link from "next/link";

function SinglePost({ post }) {
  return (
    <div className={styles.post}>
      <Link href="/">Back</Link>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}

export default SinglePost;
