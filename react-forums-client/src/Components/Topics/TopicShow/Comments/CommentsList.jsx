import React from 'react';
import './comments.css'


const Comments = (props =>{
    console.log(props.comments)
    const commentList = props.comments.map((comment, i)=>{
        return(
            <li key={i} class="comment">
                <p class="comment-body">{comment}</p>
            </li>
        )
    })
    return(
        <ul>{commentList}</ul>
    )
})

export default Comments;