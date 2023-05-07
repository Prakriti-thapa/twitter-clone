import Header from "./header";
import TweetBody from "./Tweetbody";
import Footer from "./footer";

const Tweet = ({ name, username, image, id,content }) => {
  return (
    <div className="tweet">
      <img
        src="https://placekitten.com/50/50"
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} username={username} />
        <TweetBody image={image} content={content} />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;
