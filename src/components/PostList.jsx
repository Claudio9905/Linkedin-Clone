import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMeProfileAction,
  getPostsAction,
  getProfileAction,
} from "../redux/actions";
import { Alert, Spinner } from "react-bootstrap";

import PostCard from "./PostCard";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
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

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Spinner variant="primary" animation="border" />
      </div>
    );
  }

  return (
    <>
      {" "}
      <div>
        {[...posts]
          .sort(() => Math.random() - 0.5)
          .slice(0, 20)
          .map((post) => {
            const user = getUserProfile(post.username);

            return <PostCard key={post._id} post={post} user={user} />;
          })}
      </div>
    </>
  );
};

export default PostList;
