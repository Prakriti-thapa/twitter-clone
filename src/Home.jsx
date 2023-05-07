import { useEffect, useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/createTweet";
import axios from "axios";
function Home() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all",
      {
        headers: {
          apiKey: "645739127213f63d4355a662",
        },
      }
    );
    setTweets(posts.data);
    console.log(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <CreateTweet />
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.user.fullname}
            id={tweet._id}
            username={tweet.user.name}
            key={tweet._id}
            image={tweet.image}
            content={tweet.content}
          />
        );
      })}
    </>
  );
}

export default Home;
