import "./AddPost.css";
import { useState } from "react";
import axios from "axios";

const AddPost = (props) => {
  const [postContent, setPostContent] = useState("");
  console.log(postContent);

  const newPost = (e) => {
    e.preventDefault();

    if (!postContent) {
      return;
    }

    axios
      .post("https://akademia108.pl/api/social-app/post/add", {
        content: postContent,
      })
      .then((res) => {
        setPostContent("");
        props.getPrevPost();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={newPost}>
      <textarea
        className="textareaPost"
        placeholder="What is happening?!"
        onChange={(e) => {
          setPostContent(e.target.value);
        }}
        value={postContent}
      ></textarea>

      <button className="btn">Add Post</button>
    </form>
  );
};

export default AddPost;
