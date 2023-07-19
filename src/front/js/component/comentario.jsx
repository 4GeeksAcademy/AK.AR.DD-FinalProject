

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Comentario = () => {
  const { store, actions } = useContext(Context);
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);
  const { country, city } = useParams(); // Access the country and city names from the URL
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = async () => {
    if (!store.auth) {
      // Si el usuario no está logeado, mostrar el alert
      setShowLoginAlert(true);
      return;
    }

    if (newComment === "") {
      return;
    }

    const success = await actions.addComment(newComment, city);
    console.log(success);
    getComments();
  };

  const getComments = () => {
    actions.getComments(city);
  };

  useEffect(() => {
    getComments(city);
  }, []);

  return (
    <div>
      {/* Alert para cuando el usuario no está logeado */}
      {showLoginAlert && (
        <div className="alert alert-danger" role="alert">
          You need to be logged in to add a comment
        </div>
      )}

      {/* Comment input and image upload */}
      <div className="mb-3 mt-3 container">
      <div className="header-comment">
      <h1 className="namecommentcountry">{country}</h1>
      <h2 className="namecommentcity">{city}</h2>
      </div>
     
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="form-control textareacoment"
          placeholder="Enter your comment"
        ></textarea>
        <div className="d-flex justify-content-between mt-2">
          <button onClick={handlePostComment} className="btn btn-primary postcomment">
            Post Comment
          </button>
      
        </div>
      </div>

     <h2 className="bestplace">City <span className="bestpalcespan">Reviews</span></h2>
      {Array.isArray(store.comments) &&
        store.comments.map((comment) => (
          
          <div className="comment card mt-3 container textcommentuser" key={comment.id}>
            {/* Comment content */}
            <div className="card-body">
           
              {/* Comment toolbar */}
              <div className="toolbar-right textuser"><FontAwesomeIcon icon={faUser} /> {comment.user.email}</div>
            </div>
            <p className="card-text">{comment.content}</p>
            {/* Comment votes */}
            <div className="card-footer">
           
            </div>
          </div>
        ))}

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
