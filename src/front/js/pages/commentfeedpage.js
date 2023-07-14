// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
// import { CommentFeed } from "../component/comment.jsx";
// import { CommentPost } from "./commentpost.js";
// import { useParams } from "react-router-dom";



// export const CommentFeedPage = () => {

//   const params = useParams();
//   const { store, actions } = useContext(Context);

// // traerme la ciudad la cual estoy viendo los comentarios
// console.log("command feed page")
// console.log(params.ciudad_id)
// // llamar al endpoint con esa ciudad
// actions.getComments(params.ciudad_id)
// // console.log(lista con todos los comentarios)
// // hacer un map donde un comentario se pasa a commentpost
//   return (
//     <div>
//       <h1>Comment Feed Page</h1>
//       {/* <CommentFeed />
//       <CommentPost/> */}
//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </div>
//   );
// };

