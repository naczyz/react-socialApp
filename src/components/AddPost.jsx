import "./AddPost.css";
import { useState } from "react";
import axios from "axios";

const AddPost = (props) => {
  const [postContent, setPostContent] = useState("");

  const addPost = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/add", {
        content: postContent,
      })
      .then((res) => {
        setPostContent("");
        console.log(setPostContent);
      });
  };

  return (
    <form>
      <textarea
        className="textareaPost"
        value={postContent}
        onChange={(e) => {
          setPostContent(e.target.value);
        }}
      ></textarea>

      <button className="btn" onClick={addPost}>
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
