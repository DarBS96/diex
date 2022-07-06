import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const getData = async () => {
  const obj = {
    key1: "myusername",
    email: "mymail@gmail.com",
    name: "Isaac",
    lastname: "Doe",
    age: 27,
  };
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const res = await fetch(
      "https://webhook.site/03440d5b-0ab7-4d27-bd1f-2a6df78a4632",
      options
    );
    console.log("hello");
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/shop"> shop </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Router>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
      <button onClick={getData}>Press me to some data</button>
    </>
  );
}

export default App;
