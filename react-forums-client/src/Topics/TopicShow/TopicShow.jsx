import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class TopicShow extends Component {
    constructor(){
        super();
        this.state={
            thisTopic: []
        }
    }
    componentDidMount(){
        const id = this.props.match.params

        const stringId = id.id
        this.findTopic(stringId)
    }
    findReview = async(id)=>{
        let singleTopic = await fetch('http://localhost:3001.topics'+id)
        let objectTopic = await singleTopic.json(); 
        console.log(objectTopic)
    }

}

export default TopicShow;