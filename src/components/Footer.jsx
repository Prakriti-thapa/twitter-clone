import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="tweet-footer">
      <button className="btn-reply">Reply</button>
      <button className="btn-retweet">Retweet</button>
      <button className={liked ? "btn-like liked" : "btn-like"} onClick={toggleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
      <button className="btn-share">Share</button>
      <p>Likes: {count}</p>
    </div>
  );
};

export default Footer;
