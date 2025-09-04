import { useState } from "react";
import {
  ArrowRepeat,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Send,
} from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, user }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));
  const [comments] = useState(Math.floor(Math.random() * 100));
  const [isliked, setisLiked] = useState(false);
  const navigate = useNavigate();

  const [follower] = useState(Math.floor(Math.random() * 10000));

  // funzione di toggle like
  const toggleLike = () => {
    setLikes((prev) => {
      return isliked ? prev - 1 : prev + 1;
    });
    setisLiked((prev) => !prev);
  };

  return (
    <Card key={post._id} className="my-2">
      <div className="d-flex px-3 pt-2">
        <div className="me-2">
          <img
            src={user?.image}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-circle"
          />
        </div>
        <div>
          <h5
            className="mb-0 p-like-comment"
            onClick={() => {
              navigate(`/profile/${user._id}`);
            }}
          >
            {post.username}
          </h5>
          <p className="mb-0 pfont">{follower} follower</p>
        </div>
      </div>
      <div className="px-3">
        <p className="mb-0">{post.text}</p>
      </div>

      {post.image && (
        <div className="my-2">
          <img src={post.image} alt="image" className="w-100" />
        </div>
      )}

      <div className="d-flex align-items-center justify-content-between px-3">
        <div className="d-flex align-items-center">
          <HandThumbsUpFill className="text-primary me-1" />{" "}
          <p className="mb-0 p-like-comment">{likes}</p>
        </div>
        <div>
          <p className="mb-0 p-like-comment">{comments} commenti</p>
        </div>
      </div>
      <div className="d-flex mx-3 mt-3 b-top">
        <div className="flex-grow-1 pointer btn-post">
          <button
            className={`w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center ${
              isliked ? "text-primary" : "text-black"
            }`}
            onClick={toggleLike}
          >
            {isliked ? (
              <HandThumbsUpFill className="me-2 text-primary" />
            ) : (
              <HandThumbsUp className="me-2" />
            )}
            Consiglia
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
            <ChatDots className="me-2" /> Commenta
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
            <ArrowRepeat className="me-2" /> Diffondi il post
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
            <Send className="me-2" /> Invia
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
