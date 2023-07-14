// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useParams } from "react-router-dom";
// import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";

// // Crear el comentario
// export const Comentario = () => {
//   const { store, actions } = useContext(Context);
//   const [newComment, setNewComment] = useState("");
//   const [newImage, setNewImage] = useState(null);

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setNewImage(file);
//   };

//   const params = useParams();
//   console.log(params);
//   console.log(params.city);
//   // {params.id}

//   const handlePostComment = async () => {
//     if (newComment === "") {
//       return;
//     }

//     const success = await actions.addComment(newComment);
//     console.log(success);
//     getComments();
//   };

//   const getComments = () => {
//     actions.getComments();
//   };

//   useEffect(() => {
//     getComments();
//   }, []);

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3 container">
//         <div className="comment-toolbar mb-2 d-flex justify-content-between">
//           <div className="toolbar-left">
//             {/* Toolbar buttons */}
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faBold} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faUnderline} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faListUl} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faListOl} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faHeading} />
//             </button>
//           </div>
//         </div>
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <div className="d-flex justify-content-between mt-2">
//           <input type="file" onChange={handleImageChange} className="form-control" />
//           <button onClick={handlePostComment} className="btn btn-primary">
//             Post Comment
//           </button>
//         </div>
//       </div>

//       {/* Render comments */}
//       {Array.isArray(store.comments) &&
//         store.comments.map((comment) => (
//           <div className="comment card mt-3 container" key={comment.id}>
//             {/* Comment content */}
//             <div className="card-body">
//               {/* Comment toolbar */}
//               <div className="toolbar-right">{comment.username}</div>
//             </div>
//             <p className="card-text">{comment.content}</p>
//             {/* Comment votes */}
//             <div className="card-footer">
//               {/* <button onClick={() => handleUpvote(comment.id)} className="btn btn-outline-primary me-2">
//                 <FontAwesomeIcon icon={faThumbsUp} /> Upvote
//               </button>
//               <span>{comment.upvotes}</span>
//               <button onClick={() => handleDownvote(comment.id)} className="btn btn-outline-primary mx-2">
//                 <FontAwesomeIcon icon={faThumbsDown} /> Downvote
//               </button> */}
//               {/* <span>{comment.downvotes}</span> */}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };
// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useParams } from "react-router-dom";
// import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";

// export const Comentario = () => {
//   const { store, actions } = useContext(Context);
//   const [newComment, setNewComment] = useState("");
//   const [newImage, setNewImage] = useState(null);
//   const { country, city } = useParams(); // Access the country and city names from the URL

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setNewImage(file);
//   };

//   const handlePostComment = async () => {
//     if (newComment === "") {
//       return;
//     }

//     const success = await actions.addComment(newComment);
//     console.log(success);
//     getComments();
//   };

//   const getComments = () => {
//     actions.getComments();
//   };

//   useEffect(() => {
//     getComments();
//   }, []);

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3 container">
//         <div className="comment-toolbar mb-2 d-flex justify-content-between">
//           <div className="toolbar-left">
//             {/* Toolbar buttons */}
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faBold} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faUnderline} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faListUl} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faListOl} />
//             </button>
//             <button className="btn btn-outline-primary me-2">
//               <FontAwesomeIcon icon={faHeading} />
//             </button>
//           </div>
//         </div>
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <div className="d-flex justify-content-between mt-2">
//           <input type="file" onChange={handleImageChange} className="form-control" />
//           <button onClick={handlePostComment} className="btn btn-primary">
//             Post Comment
//           </button>
//         </div>
//       </div>

//       {/* Render comments */}
//       {Array.isArray(store.comments) &&
//         store.comments.map((comment) => (
//           <div className="comment card mt-3 container" key={comment.id}>
//             {/* Comment content */}
//             <div className="card-body">
//               {/* Comment toolbar */}
//               <div className="toolbar-right">{comment.username}</div>
//             </div>
//             <p className="card-text">{comment.content}</p>
//             {/* Comment votes */}
//             <div className="card-footer">
//               {/* <button onClick={() => handleUpvote(comment.id)} className="btn btn-outline-primary me-2">
//                 <FontAwesomeIcon icon={faThumbsUp} /> Upvote
//               </button>
//               <span>{comment.upvotes}</span>
//               <button onClick={() => handleDownvote(comment.id)} className="btn btn-outline-primary mx-2">
//                 <FontAwesomeIcon icon={faThumbsDown} /> Downvote
//               </button> */}
//               {/* <span>{comment.downvotes}</span> */}
//             </div>
//           </div>
//         ))}

//       {/* Display country and city names */}
//       <h1>{country}</h1>
//       <h2>{city}</h2>
//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </div>

//   );
// };
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";

export const Comentario = () => {
  const { store, actions } = useContext(Context);
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);
  const { country, city } = useParams(); // Access the country and city names from the URL

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
  };

  const handlePostComment = async () => {
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
      {/* Comment input and image upload */}
      <div className="mb-3 mt-3 container">
        <div className="comment-toolbar mb-2 d-flex justify-content-between">
          <div className="toolbar-left">
            {/* Toolbar buttons */}
            <button className="btn btn-outline-primary me-2">
              <FontAwesomeIcon icon={faBold} />
            </button>
            <button className="btn btn-outline-primary me-2">
              <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button className="btn btn-outline-primary me-2">
              <FontAwesomeIcon icon={faListUl} />
            </button>
            <button className="btn btn-outline-primary me-2">
              <FontAwesomeIcon icon={faListOl} />
            </button>
            <button className="btn btn-outline-primary me-2">
              <FontAwesomeIcon icon={faHeading} />
            </button>
          </div>
        </div>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="form-control"
          placeholder="Enter your comment"
        ></textarea>
        <div className="d-flex justify-content-between mt-2">
          <input type="file" onChange={handleImageChange} className="form-control" />
          <button onClick={handlePostComment} className="btn btn-primary">
            Post Comment
          </button>
        </div>
      </div>

      {/* Render comments */}
      {Array.isArray(store.comments) &&
        store.comments.map((comment) => (
          <div className="comment card mt-3 container" key={comment.id}>
            {/* Comment content */}
            <div className="card-body">
              {/* Comment toolbar */}
              <div className="toolbar-right">{comment.user.email}</div>
            </div>
            <p className="card-text">{comment.content}</p>
            {/* Comment votes */}
            <div className="card-footer">
              {/* <button onClick={() => handleUpvote(comment.id)} className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faThumbsUp} /> Upvote
              </button>
              <span>{comment.upvotes}</span>
              <button onClick={() => handleDownvote(comment.id)} className="btn btn-outline-primary mx-2">
                <FontAwesomeIcon icon={faThumbsDown} /> Downvote
              </button> */}
              {/* <span>{comment.downvotes}</span> */}
            </div>
          </div>
        ))}

      {/* Display country and city names */}
      <h1>{country}</h1>
      <h2>{city}</h2>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


