// import React, { useState, useContext } from "react";
// import { Context } from "../store/appContext";
// import { CommentPost } from "../pages/commentpost.js";
// import { addComment } from "../flux/actions";

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

//   const handlePostComment = () => {
//     if (newComment.trim() === "") {
//       return;
//     }

//     const newCommentData = {
//       content: newComment,
//       user_id: store.user_id,
//     }

//     // Add the new comment to the existing comments in the store
//     actions.addComment(newCommentData);

//     // Clear the comment input and image
//     setNewComment("");
//     setNewImage(null);
//   };

//   const handleUpvote = async (commentId) => {
//     const success = await actions.upvoteComment(commentId);
//     if (success) {
//       // Handle successful upvote
//     }
//   };

//   const handleDownvote = async (commentId) => {
//     const success = await actions.downvoteComment(commentId);
//     if (success) {
//       // Handle successful downvote
//     }
//   };

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3">
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <input type="file" onChange={handleImageChange} className="form-control mt-2" />
//       </div>
//       <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>

//       {/* Render comments */}
//       {store.comments && store.comments.map((comment) => (
//         <CommentPost
//           key={comment.id}
//           comment={comment}
//           handleUpvote={handleUpvote}
//           handleDownvote={handleDownvote}
//         />
//       ))}
//     </div>
//   );
// };

// import React, { useState, useContext } from "react";
// import { Context } from "../store/appContext";
// import { CommentPost } from "../pages/commentpost.js";
// import { addComment } from "../store/flux"

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

//   const handlePostComment = async () => {
//     if (newComment.trim() === "") {
//       return;
//     }

//     const newCommentData = {
//       content: newComment,
//       user_id: store.user_id,
//     }

//     // Add the new comment to the existing comments in the store
//     const success = await actions.addComment(newCommentData);

//     if (success) {
//       // Handle successful comment submission
//     } else {
//       // Handle failed comment submission
//     }

//     // Clear the comment input and image
//     setNewComment("");
//     setNewImage(null);
//   };

//   const handleUpvote = async (commentId) => {
//     const success = await actions.upvoteComment(commentId);
//     if (success) {
//       // Handle successful upvote
//     }
//   };

//   const handleDownvote = async (commentId) => {
//     const success = await actions.downvoteComment(commentId);
//     if (success) {
//       // Handle successful downvote
//     }
//   };

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3">
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <input type="file" onChange={handleImageChange} className="form-control mt-2" />
//       </div>
//       <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>

//       {/* Render comments */}
//       {store.comments && store.comments.map((comment) => (
//         <CommentPost
//           key={comment.id}
//           comment={comment}
//           handleUpvote={handleUpvote}
//           handleDownvote={handleDownvote}
//         />
//       ))}
//     </div>
//   );
// };

// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { CommentPost } from "../pages/commentpost.js";
// import  addComment  from "../store/flux.js";

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

//   const handlePostComment = async () => {
//     if (newComment.trim() === "") {
//       return;
//     }
  
//     const success = addComment(newComment);
  
//     if (success) {
//       // Handle successful comment submission
//     } else {
//       // Handle failed comment submission
//     }
  
//     setNewComment("");
//     setNewImage(null);
//   };

//   const handleUpvote = async (commentId) => {
//     // Handle upvote logic
//   };

//   const handleDownvote = async (commentId) => {
//     // Handle downvote logic
//   };

//   const getComments = () => {
//     actions.getComments()
//   };

//   useEffect(() => {
//     getComments()
//   },[])

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3">
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <input type="file" onChange={handleImageChange} className="form-control mt-2" />
//       </div>
//       <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>

//       {/* Render comments */}
//       {store.comments && store.comments.map((comment) => (
//         <CommentPost
//           key={comment.id}
//           comment={comment}
//           handleUpvote={handleUpvote}
//           handleDownvote={handleDownvote}
//         />
//       ))}
//     </div>
//   );
// };

// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { CommentPost } from "../pages/commentpost.js";
// import  addComment  from "../store/flux.js";

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

//   const handlePostComment = async () => {
//     if (newComment.trim() === "") {
//       return;
//     }
  
//     const success = await addComment(newComment);
  
//     if (success) {
//       // Handle successful comment submission
//     } else {
//       // Handle failed comment submission
//     }
  
//     setNewComment("");
//     setNewImage(null);
//   };

//   const handleUpvote = async (commentId) => {
//     // Handle upvote logic
//   };

//   const handleDownvote = async (commentId) => {
//     // Handle downvote logic
//   };

//   // const getComments = () => {
//   //   actions.getComments()
//   // };

//   // useEffect(() => {
//   //   getComments()
//   // },[])

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <div className="mb-3 mt-3">
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           className="form-control"
//           placeholder="Enter your comment"
//         ></textarea>
//         <input type="file" onChange={handleImageChange} className="form-control mt-2" />
//       </div>
//       <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>

//       {/* Render comments */}
//       {store.comments && store.comments.map((comment) => (
//         <CommentPost
//           key={comment.id}
//           comment={comment}
//           handleUpvote={handleUpvote}
//           handleDownvote={handleDownvote}
//         />
//       ))}
//     </div>
//   );
// };





// import React, { useState, useEffect, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";
// import { Context } from "../store/appContext";

// export const CommentFeed = () => {
//   const { store, actions } = useContext(Context);
//   const [newComment, setNewComment] = useState("");
//   const [newImage, setNewImage] = useState(null);

//   useEffect(() => {
//     actions.fetchComments();
//   }, []);

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setNewImage(file);
//   };

//   const handlePostComment = async () => {
//     if (newComment.trim() === "") {
//       return;
//     }
//     const success = await actions.postComment(newComment, newImage);
//     if (success) {
//       setNewComment("");
//       setNewImage(null);
//     }
//   };

//   const handleUpvote = async (commentId) => {
//     const success = await actions.upvoteComment(commentId);
//     if (success) {
//       // Handle successful upvote
//     }
//   };

//   const handleDownvote = async (commentId) => {
//     const success = await actions.downvoteComment(commentId);
//     if (success) {
//       // Handle successful downvote
//     }
//   };

//   return (
//     <div>
//       {/* Comment input and image upload */}
//       <textarea value={newComment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handlePostComment}>Post Comment</button>

//       {/* Render comments */}
//       {store.comments && store.comments.map((comment) => (
//         <div key={comment.id} className="comment">
//           {/* Comment content */}
//           {comment.image && <img src={comment.image} alt="Comment Image" />}
//           <div className="comment-content">
//             {/* Comment toolbar */}
//             <div className="comment-toolbar">
//               {/* Toolbar buttons */}
//               <button>
//                 <FontAwesomeIcon icon={faBold} />
//               </button>
//               <button>
//                 <FontAwesomeIcon icon={faUnderline} />
//               </button>
//               <button>
//                 <FontAwesomeIcon icon={faListUl} />
//               </button>
//               <button>
//                 <FontAwesomeIcon icon={faListOl} />
//               </button>
//               <button>
//                 <FontAwesomeIcon icon={faHeading} />
//               </button>
//             </div>
//             <p>{comment.content}</p>
//           </div>
//           {/* Comment votes */}
//           <div className="comment-votes">
//             <button onClick={() => handleUpvote(comment.id)}>
//               <FontAwesomeIcon icon={faThumbsUp} />
//             </button>
//             <span>{comment.upvotes}</span>
//             <button onClick={() => handleDownvote(comment.id)}>
//               <FontAwesomeIcon icon={faThumbsDown} />
//             </button>
//             <span>{comment.downvotes}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CommentPost } from "../pages/commentpost.js";
import addComment from "../store/flux.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faBold, faUnderline, faListUl, faListOl, faHeading } from "@fortawesome/free-solid-svg-icons";

export const CommentFeed = () => {
  const { store, actions } = useContext(Context);
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);

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

    const success = await actions.addComment(newComment);
    console.log(success);
    getComments()

    // if (success) {
    //   // Handle successful comment submission
    //   console.log("Comment added successfully");
    // } else {
    //   // Handle failed comment submission
    //   console.log("Failed to add comment");
    // }

    // setNewComment("");
    // setNewImage(null);
  };

  // const handleUpvote = async (commentId) => {
  //   // Handle upvote logic
  // };

  // const handleDownvote = async (commentId) => {
  //   // Handle downvote logic
  // };

  const getComments = () => {
    actions.getComments();
  };

  useEffect(() => {
    getComments();
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
          <button onClick={handlePostComment} className="btn btn-primary">Post Comment</button>
        </div>
      </div>

      {/* Render comments */}
      {Array.isArray(store.comments) &&
        store.comments.map((comment) => (
          <CommentPost
            key={comment.id}
            comment={comment}
            // handleUpvote={handleUpvote}
            // handleDownvote={handleDownvote}
          />
        ))}
    </div>
  );
};

