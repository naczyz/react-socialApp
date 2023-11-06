import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import FollowRecommendations from "../components/FollowRecommendations";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getLatesPost = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/latest")
      .then((res) => {
        setPosts(res.data);
        // console.log(res);
      });
  };

  const getNextPost = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((res) => {
        setPosts(posts.concat(res.data));
        // console.log(res.data);
      });
  };

  const getPrevPost = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/newer-then", {
        date: posts[0].created_at,
      })
      .then((res) => {
        setPosts(res.data.concat(posts));
      });
  };

  useEffect(() => {
    getLatesPost();
  }, [props.user]);

  return (
    <div className="home">
      {props.user && <AddPost getPrevPost={getPrevPost} />}
      <FollowRecommendations />
      <div className="postList">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              user={props.user}
              setPosts={setPosts}
            />
          );
        })}
        <button className="btn loadMore" onClick={getNextPost}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
