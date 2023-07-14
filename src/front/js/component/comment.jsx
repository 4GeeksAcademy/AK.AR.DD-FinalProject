// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { CommentPost } from "../pages/commentpost.js";
// import addComment from "../store/flux.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useParams } from "react-router-dom";
// import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";

// // Crear el comentario
// export const CommentFeed = () => {
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
// 	console.log(params)
//   console.log(params.city)
//     // {params.id}

//   const handlePostComment = async () => {
//     if (newComment === "") {
//       return;
//     }

//     const success = await actions.addComment(newComment);
//     console.log(success);
//     getComments()

//     // if (success) {
//     //   // Handle successful comment submission
//     //   console.log("Comment added successfully");
//     // } else {
//     //   // Handle failed comment submission
//     //   console.log("Failed to add comment");
//     // }

//     // setNewComment("");
//     // setNewImage(null);
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
//           <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>
//         </div>
//       </div>

//       {/* Render comments */}
//       {Array.isArray(store.comments) &&
//         store.comments.map((comment) => (
//           <CommentPost
//             key={comment.id}
//             comment={comment}
//             // handleUpvote={handleUpvote}
//             // handleDownvote={handleDownvote}
//           />
//         ))}
//     </div>
//   );
// };

