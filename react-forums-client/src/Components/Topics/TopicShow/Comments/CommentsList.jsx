import React from 'react';


const Comments = (props =>{
    console.log(props.comments)
    const commentList = props.comments.map((comment, i)=>{
        return(
            <li key={i}>
                <p>{comment}</p>
            </li>
        )
    })
    return(
        <ul>{commentList}</ul>
    )
})

export default Comments;