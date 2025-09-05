import { useEffect, useState } from "react";
import {
  ArrowRepeat,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Pencil,
  Send,
  Trash,
} from "react-bootstrap-icons";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getComments,
  updateComment,
  deleteComment,
} from "../redux/actions";

const PostCard2 = ({ post, user }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));
  const [isliked, setisLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editText, setEditText] = useState("");

  const profile = useSelector((state) => state.mainProfile.me_Profile);
  const { comments, loading } = useSelector((state) => state.comments);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const [follower] = useState(Math.floor(Math.random() * 10000));

  // toggle like
  const toggleLike = () => {
    setLikes((prev) => (isliked ? prev - 1 : prev + 1));
    setisLiked((prev) => !prev);
  };

  // mostra/nascondi commenti
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  // aggiungi nuovo commento
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const commentData = {
      comment: newComment,
      rate: "1",
      elementId: post._id,
    };

    dispatch(addComment(commentData));
    dispatch(getComments());
    setNewComment("");
  };

  // salva modifica commento
  const handleSaveEdit = (commentId) => {
    if (editText.trim() === "") return;

    const updatedData = {
      comment: editText,
      rate: "1",
      elementId: post._id,
    };

    dispatch(updateComment(commentId, updatedData, post._id));
    setEditCommentId(null);
    setEditText("");
  };

  // elimina commento
  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId, post._id));
  };

  return (
    <Card key={post._id} className="my-2">
      <div className="d-flex">
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
              onClick={() => navigate(`/profile/${user._id}`)}
            >
              {post.username}
            </h5>
            <p className="mb-0 pfont">{follower} follower</p>
          </div>
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
          <HandThumbsUpFill className="text-primary me-1" />
          <p className="mb-0 p-like-comment">{likes}</p>
        </div>
        <div>
          <p className="mb-0 p-like-comment">
            {comments ? comments.length : 0} commenti
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center mx-3 mt-3 b-top">
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
            <span className="d-none d-md-inline">Consiglia</span>
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button
            className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center"
            onClick={toggleComments}
          >
            <ChatDots className="me-2" />
            <span className="d-none d-md-inline">Commenta</span>
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
            <ArrowRepeat className="me-2" />
            <span className="d-none d-md-inline">Diffondi il post</span>
          </button>
        </div>
        <div className="flex-grow-1 pointer btn-post">
          <button className="w-100 border-0 bg-transparent py-2 d-flex align-items-center justify-content-center">
            <Send className="me-2" />
            <span className="d-none d-md-inline">Invia</span>
          </button>
        </div>
      </div>

      {/* SEZIONE COMMENTI */}
      {showComments && (
        <div className="px-3 py-2 b-top">
          <Form onSubmit={handleAddComment} className="mb-2 w-100">
            <div className="d-flex align-items-center">
              <img
                src={profile.image}
                alt="User"
                width={30}
                height={30}
                className="rounded-circle me-2"
              />
              <Form.Control
                className="rounded-pill flex-grow-1"
                type="text"
                placeholder="Aggiungi un commento..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button type="submit" variant="primary" className="ms-2 d-none">
                Invia
              </Button>
            </div>
          </Form>

          {loading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" size="sm" />
            </div>
          )}

          {!loading &&
            comments &&
            comments.map((c) => (
              <div
                key={c._id}
                className="mb-2 d-flex justify-content-between align-items-start"
              >
                <div className="flex-grow-1">
                  <strong>{c.author}</strong>
                  {editCommentId === c._id ? (
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSaveEdit(c._id);
                      }}
                    >
                      <Form.Control
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="mb-1 rounded-pill"
                      />
                      <Button type="submit" size="sm" variant="success">
                        Salva
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="ms-2"
                        onClick={() => {
                          setEditCommentId(null);
                          setEditText("");
                        }}
                      >
                        Annulla
                      </Button>
                    </Form>
                  ) : (
                    <p className="mb-0">{c.comment}</p>
                  )}
                </div>
                {c.author === "nenidop494@cavoyar.com" && (
                  <div className="ms-2">
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setEditCommentId(c._id);
                        setEditText(c.comment);
                      }}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-danger"
                      onClick={() => handleDelete(c._id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </Card>
  );
};

export default PostCard2;
