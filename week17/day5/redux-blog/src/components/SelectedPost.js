import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "./features/postsSlice";
import { useNavigate, useParams } from "react-router-dom";

function SelectedPost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const post = useSelector((store) => store.postsReducer.posts);

  const selectedPostIdx = post.findIndex((post) => post.id === id);

  const handleClick = () => {
    dispatch(deletePost(post[selectedPostIdx].id));
    navigate("/");
  };
  return (
    <div>
      <h1>Selected post</h1>
      <div className="post">
        <h1>{post[selectedPostIdx].title}</h1>
        <p>{post[selectedPostIdx].body}</p>
      </div>
      <br />
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
}

export default SelectedPost;
