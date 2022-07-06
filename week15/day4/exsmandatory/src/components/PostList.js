import React from "react";
import postList from "./postList.json";

const PostList = () => {
  return (
    <div>
      <h1>Hello this is a title</h1>
      {postList.map(({ title, content, id }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
