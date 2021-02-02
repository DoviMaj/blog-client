import React from "react";
import styles from "../styles/Post.module.scss";
import IndexPost from "../components/IndexPost";

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <IndexPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
