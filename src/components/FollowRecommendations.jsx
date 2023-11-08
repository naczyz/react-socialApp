import { useState, useEffect } from "react";
import axios from "axios";
import "./FollowRecommendations.css";

const FollowRecommendations = (props) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")
      .then((res) => {
        setRecommendations(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getRecommendations();
  }, [props.post]);

  const follow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: id,
      })
      .then((res) => {
        getRecommendations();
        props.getLatesPost();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="list-recommendations">
      <ul>
        {recommendations.map((user) => (
          <li key={user.id}>
            {user.username}
            <img
              src={user.avatar_url}
              alt={recommendations.username}
              className="avatar-follow"
            />
            <button className="btn" onClick={() => follow(user.id)}>
              Follow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowRecommendations;
