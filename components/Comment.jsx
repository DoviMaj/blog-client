import React from "react";

const Comment = ({ comment }) => {
  const date = new Date(comment.date);
  const date_formated = date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="comment">
      <strong>{comment.user}</strong>
      <p>{comment.text}</p>
      <p>{date_formated}</p>
    </div>
  );
};

export default Comment;
