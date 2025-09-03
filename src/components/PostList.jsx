import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, getProfileAction } from "../redux/actions";
import { Alert, Card, Spinner } from "react-bootstrap";
import {
  ArrowRepeat,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Send,
} from "react-bootstrap-icons";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getProfileAction());
  }, [dispatch]);

  // creo una funzione per trovare il profilo corrispondente al post
  const getUserProfile = (username) => {
    if (!profile || profile.length === 0) return null;

    return profile.find((p) => p.username === username);
  };

  if (loading) return <Spinner variant="primary" animation="border" />;
  if (error) return <Alert variant="danger">Errore: {error}</Alert>;
  return (
    <div>
      {[...posts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20)
        .map((post) => {
          const follower = Math.floor(Math.random() * 10000);
          const like = Math.floor(Math.random() * 1000);
          const comments = Math.floor(Math.random() * 100);
          const user = getUserProfile(post.username);
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
                  <h5 className="mb-0">{post.username}</h5>
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
                  <p className="mb-0 p-like-comment">{like}</p>
                </div>
                <div>
                  <p className="mb-0 p-like-comment">{comments} commenti</p>
                </div>
              </div>
              <div className="d-flex mx-3 mt-3 b-top">
                <div className="flex-grow-1 pointer btn-post">
                  <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
                    <HandThumbsUp className="me-2" /> Consiglia
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
        })}
    </div>
  );
};

export default PostList;
