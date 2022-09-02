import React from 'react'
import "./announcement.css"
import Card from 'react-bootstrap/Card';

function Announcement() {
  return (
    <Card>
      <div>
      <div className='cardannounce'>
      <h1>Add Announcement</h1>
        <form >
            <div className="title">
            <label>Title</label> <br></br>
            <input type="text" placeholder='Enter title' />
            </div>
            <div className="description"> 
            <label>Description</label> <br></br>
            <input type="textarea" placeholder='Enter description' />
            </div>
            <div className="btn">
              <button>Create Announcement</button>
            </div>
        </form>
      </div>
      </div>

        
    </Card>
  )
}

export default Announcement