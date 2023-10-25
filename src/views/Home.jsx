import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getLatesPost = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/latest")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      });
  };

  const getNextPost = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((res) => {
        setPosts(posts.concat(res.data));
        console.log(res.data);
      });
  };

  useEffect(() => {
    getLatesPost();
  }, []);

  return (
    <div className="home">
      <AddPost /> 
      <div className="postList">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
        <button className="btn loadMore" onClick={getNextPost}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
