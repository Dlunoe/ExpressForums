import React from 'react';


const Comments = (props =>{
    const commentList = props.comments.map((comments, i)=>{
        return(
            <li key={comments._id}>
                
            </li>
        )
    })
    return(
        <ul>{commentList}</ul>
    )
})

export default Comments;