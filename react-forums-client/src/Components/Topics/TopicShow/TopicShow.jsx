import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Comments from './Comments/CommentsList';

class TopicShow extends Component {
    constructor(){
        super();
        this.state={
            // thisTopic: [],
            // comment: ''
            id: '',
            title: '',
            body:'',
            comments:['']
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
        if(thisTopic !== undefined){
            this.setState(prevState=>({
                id: thisTopic._id,
                title: thisTopic.title,
                body: thisTopic.body,
                comments: thisTopic.comments
            }))
        }
    }
    handleChange=(e)=>{
        this.setState({
            comments: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.addComment(this.state.id, this.state);
    }
    addComment = async (id, formData) =>{
        console.log(formData);
        try{
            const madeComment = await fetch('http://localhost:3001/topics/' + id,{
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await madeComment.json();
            console.log(parsedResponse);
        }catch(err){
            console.log(err)
        }
    }
    
    render(){
        if(this.state.title==''){
            return (<div>Topic not found</div>)
        }
        return(
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.body}</p>
                <Comments comments={this.state.comments} />
                <div name="newComment">
                    <form onSubmit={this.handleSubmit}>
                        Leave a comment:
                        <textarea name="commentbox" onChange={this.handleChange} />
                        <input type="submit" value="Add comment" />
                    </form>
                </div>  
            </div>
        )
    }
}

export default TopicShow;