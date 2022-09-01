// import React, {useState} from 'react'

// function comment(props) {
//     const {handleCommentSubmit} = props
//     // let comment = ""
//     const [comment, setComment] = useState("")
//   return (
//     <div>
//         <div className="card mt-4 mb-3">
//             <div className="card-header">
//                 <div className="card-body">
//                     <textarea name="comment" className='form-control' placeholder="Add a new comment"
//                         onChange={event=> comment =event.target.value}
//                         value={comment}
//                     />
//                 </div>
//             </div>
//         </div>
//         <button className="btn btn-primary mr-3" onClick={event=>{
//             handleCommentSubmit(comment)
//         }
//         }>Comment</button>
//         <button className = "btn-btn-warning">Close issue</button>
//     </div>
//   )
// }

// export default comment