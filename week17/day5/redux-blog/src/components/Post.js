import ".././css/Post.css";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const navigate = useNavigate();

  const { title, body, id } = post;

  const handleClick = (e) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className="post">
      <h1 style={{ cursor: "pointer" }} id={id} onClick={handleClick}>
        {title}
      </h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
