import axios from "axios";
import { useState } from "react";
// import "./createTweet.css";
const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const tweetUploader = async () => {
    try {
      const res = await axios.post(
        "https://react-workshop.todo.fly.dev/posts/",
        {
          content: tweetContent,
          image: imageUrl,
        },
        {
          Headers: {
            apiKey: "645739127213f63d4355a662",
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = () => {
    console.log(tweetContent);
  };
  return (
    <div className="tweet-create">
      <input
        type="text"
        placeholder="image url"
        value={imageUrl}
        required
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        id="tweet-text"
        placeholder="what is happening?"
        required
        value={tweetContent}
        onChange={(e) => {
          setTweetContent(e.target.value);
          console.log(tweetContent);
        }}
      />
      {<button onClick={handleSubmit}>Tweet </button>}
      <button>Tweet </button>
    </div>
  );
};

export default CreateTweet;
