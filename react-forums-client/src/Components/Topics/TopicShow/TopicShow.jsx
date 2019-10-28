import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Comments from './Comments/CommentsList';

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
    findTopic = async(id)=>{
        let singleTopic = await fetch('http://localhost:3001/topics/'+id)
        let objectTopic = await singleTopic.json(); let thisTopic = objectTopic.data
        await console.log(thisTopic)
        this.setState(prevState=>({
            thisTopic
        }))
    }
    render(){
        if(this.state.thisTopic==null){
            return (<div>Topic not found</div>)
        }
        return(
            <div>
                <h2>{this.state.thisTopic.title}</h2>
                <p>{this.state.thisTopic.body}</p>
                {/* <Comments comments={this.thisTopic.comments} /> */}
            </div>
        )
    }
}

export default TopicShow;