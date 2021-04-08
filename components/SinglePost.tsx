import React, { useEffect, useState } from "react";
import styles from "../styles/SinglePost.module.scss";
import { useForm } from "react-hook-form";
import Comment from "./Comment";
interface Props {
  [key: string]: any;
}

const SinglePost: React.FC<Props> = ({ post, comments }) => {
  const { register, reset, handleSubmit, errors } = useForm();
  const [currentComments, setCurrentComments] = useState(comments);
  const date = new Date(post.date);
  const date_formated = date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const submitForm = async (data, e) => {
    setCurrentComments([...currentComments, data]);
    const formData = JSON.stringify(data);
    try {
      const req = await fetch(
        `https://dovimaj-blog-api.herokuapp.com/api/posts/${post._id}/comments`,
        {
          method: "post",
          body: formData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (req.status !== 200) {
        return;
      }
      console.log(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.post}>
      <h1>{post.author_name}</h1>
      <p>{post.text}</p>
      <h4>Comments:</h4>
      {currentComments &&
        currentComments.map((comment: any) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      <form>
        <label htmlFor="user">Name:</label>
        <input
          ref={register({ required: "required field" })}
          name="user"
          type="text"
        ></input>
        <label htmlFor="comment">Comment:</label>
        <input
          ref={register({ required: "required field" })}
          name="text"
          type="text"
        ></input>
        <button onClick={handleSubmit(submitForm)}>Send</button>
      </form>
    </div>
  );
};

export default SinglePost;
