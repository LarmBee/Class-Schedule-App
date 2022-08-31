import React from 'react'
import { useState } from 'react'

function Comments({postId, display, setDisplay}) {
    const [comment, setComment] = useState('')
    const handleComment = (e) => {
        e.preventDefault()
        fetch('/post', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id: postId,
                comment: comment
            })
        })

    }
  return (
    <div className={display ? 'modal-custom block': 'modal-custom none'}>
        <form onSubmit={handleComment}>
            <input type="text" placeholder='comment' className='comment' value={comment} required onChange={e => setComment(e.target.value)}/>
            <br />
            <input type="submit" className='custom-btn' value="comment" />
            <input type="button" className='custom-btn' value="close" />
        </form>
    </div>
  )
}

export default Comments