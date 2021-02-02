import React from "react";
import styles from "../styles/SinglePost.module.scss";
import Link from "next/link";

interface Props {
  [key: string]: any;
}

const SinglePost: React.FC<Props> = ({ post }) => {
  console.log(post.title);
  return (
    <div className={styles.post}>
      <Link href="/">Back</Link>
      <h1>{post.author_name}</h1>
      <p>{post.text}</p>
    </div>
  );
};

export default SinglePost;
