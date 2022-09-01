import React from 'react'
import { useState } from 'react'

function Comments({postId, display, setDisplay}) {
    const [comment, setComment] = useState('')
    const handleComment = (e) => {
        e.preventDefault()
        fetch('https://ratibar-backend.herokuapp.com/comments', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                announcement_id: postId,
                content: comment
            })
        })

    }
  return (
    <div className={display ? 'modal-custom block': 'modal-custom none'}>
        <form onSubmit={handleComment}>
            <input type="text" placeholder='comment' className='comment' value={comment} required onChange={e => setComment(e.target.value)} />
            <br />
            <button className="comment-btn my-2.5">Add</button>
            {/* <input type="submit" className='custom-btn' value="comment" /> */}
            {/* <input type="button" className='custom-btn' value="close" /> */}
        </form>
    </div>
  )
}

export default Comments