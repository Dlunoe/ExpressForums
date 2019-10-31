import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Comments from './Comments/CommentsList';
import './show.css';

class TopicShow extends Component {
    constructor(){
        super();
        this.state={
            // thisTopic: [],
            // comment: ''
            id: '',
            title: '',
            body:'',
            comments:[''],
            newComment: ''
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
            newComment: e.target.value
        })
    }
    handleSubmit = async (e) =>{
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
            await this.findTopic(id);
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
                <div class="original-post">
                    <h2 class="post-title">{this.state.title}</h2>
                    <p class="post-body">{this.state.body}</p>
                </div>
                <Comments comments={this.state.comments} />
                <div name="newComment">
                    <form onSubmit={this.handleSubmit} name="newComment">
                        <textarea name="commentbox" onChange={this.handleChange}
                        rows="5" cols="65" placeholder={"Leave a comment"}/><br/>
                        <input type="submit" value="Add comment" name="commentsubmit" class="btn btn-outline-secondary"/>
                    </form>
                </div>  
            </div>
        )
    }
}

export default TopicShow;