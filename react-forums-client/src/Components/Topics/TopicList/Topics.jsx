import React from 'react';
import {Link} from 'react-router-dom';

const Topics = (props =>{
    const topicList = props.topics.map((topic, i)=>{
        return(
            <li key={topic._id}>
                <Link to={`/topics/${topic._id}`}>
                {topic.title}
                </Link>
            </li>
        )
    })
    return(
        <ul>{topicList}</ul>
    )
})

export default Topics;