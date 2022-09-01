import Comments from "./Comments";
import { useState } from "react";
import Likes from "./Likes";
import comment from "../images/icons8-comments-24.png";




const Announcements = ({announcement})=> {
    const [display, setDisplay] = useState(false)

    const showComments = () => {
        setDisplay(!display)
    }
    
	const [CommentLists, setCommentLists] = useState([])


    
    const updateComment =  (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

	


    return (
				<div className="announcement">
				<Comments postId={announcement.id} display={display} setDisplay={setDisplay}/>

				<div className="announcement-card">
					<p>
					Title: <b>{announcement.title}</b>
					</p>
					
					<h4 style={{ fontSize: "1rem" }}>{announcement.description}</h4>
				</div>
				<div className="d-flex" style={{justifyContent: "center",alignItems: "center"}}>
					<div className="like" >
						<Likes like={0}/>
					</div>
					<div className="comment">
						<img src={comment} alt="" onClick={() => showComments(announcement.id)}/>
					</div>
					
					</div>
					{/* <Comments CommentLists={CommentLists} postId={announcement.id}  refreshFunction={updateComment} /> */}
				</div>
        )
}

export default Announcements