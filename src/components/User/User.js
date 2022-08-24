import React from 'react'
import Photo from "../../images/Miss.jpeg"

function User() {
  return (
    <div>
        <div className="row">
            <div className="col-md-4">
            <h1>
                Hello <span>User</span>
              </h1>
            </div> 
            <div className="avatar col-md-2">
                <img src={Photo} alt="Photo" style={{ height: "12vh", borderRadius: "50%" }}/>
                <a>Edit</a>
              </div> 
        </div>
    </div>
  )
}

export default User