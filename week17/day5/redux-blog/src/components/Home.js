import Post from "./Post";
import { useSelector } from "react-redux";

function Home(props) {
  const posts = useSelector((store) => store.postsReducer.posts);
  console.log(posts);

  return (
    <div>
      <h1>Home</h1>
      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Home;
