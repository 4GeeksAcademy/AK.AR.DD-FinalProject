import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CommentFeed } from "../component/comment.jsx";
import { CommentPost } from "./commentpost.js";



export const CommentFeedPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Comment Feed Page</h1>
      <CommentFeed />
      <CommentPost/>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

