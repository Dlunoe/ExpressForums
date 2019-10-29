import React from 'react';


const Comments = (props =>{
    console.log(props.topic.comments)
    const commentList = props.topic.map((comments, i)=>{
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