// import React from "react";


// export const CommentPost = ({ comment, handleUpvote, handleDownvote }) => {
//   console.log(comment)
//   return (
//     <div className="comment card mt-3 container">
//       {/* Comment content */}
//       <div className="card-body">
//         {/* Comment toolbar */}
//           <div className="toolbar-right">{comment.username}</div>
//         </div>
//         <p className="card-text">{comment.content}</p>
//       {/* Comment votes */}
//       <div className="card-footer">
//         {/* <button onClick={() => handleUpvote(comment.id)} className="btn btn-outline-primary me-2">
//           <FontAwesomeIcon icon={faThumbsUp} /> Upvote
//         </button>
//         <span>{comment.upvotes}</span>
//         <button onClick={() => handleDownvote(comment.id)} className="btn btn-outline-primary mx-2">
//           <FontAwesomeIcon icon={faThumbsDown} /> Downvote
//         </button> */}
//         {/* <span>{comment.downvotes}</span> */}
//       </div>
//     </div>
//   );
// };