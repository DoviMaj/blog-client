import React from "react";
import styles from "../styles/Post.module.scss";
import IndexPost from "../components/IndexPost";

const PostList = ({ posts }) => {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <IndexPost key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
