import React from 'react';
import {Link} from 'react-router-dom';
import './topics.css'

const Topics = (props =>{
    const topicList = props.topics.map((topic, i)=>{
        return(
            <li key={topic._id} class="topic">
                <Link to={`/topics/${topic._id}`} class="topic-name">
                {topic.title}
                </Link>
                <p class="comment-length">{topic.comments.length} comments</p>
            </li>
        )
    })
    return(
        <ul>{topicList}</ul>
    )
})

export default Topics;