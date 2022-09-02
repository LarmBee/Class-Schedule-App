import Comments from "./Comments";
import { useState } from "react";
import edit from "../images/edit--v1.png";




const Announcements = ({announcement})=> {
    const [display, setDisplay] = useState(false)

    const showComments = () => {
        setDisplay(!display)
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
					{/* <div className="like" >
						<Likes like={0}/>
					</div> */}
					<div className="edit w-10">
						<img src={edit} alt="editcomment" onClick={() => showComments(announcement.id)}/>
					</div>
					</div>
				</div>
        )
}

export default Announcements