import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './new.css'

class NewTopic extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: ''
        }
    }
    createTopic = async (topic, formData)=>{
        try{
            const newTopic = await fetch('http://localhost:3001/topics', {
                method: 'POST',
                body: JSON.stringify(topic),
                credentials: "include",
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            const newJSONtopic = await newTopic.json();
            console.log(newJSONtopic)
            var id = newJSONtopic.data._id
            console.log(id)
            // this.setState({topic: [...this.state.topics, newJSONtopic.data]})
            // await <Redirect to='topics/' />
            this.props.history.push(`/topics/${id}`)
        } catch(err){
            console.log(err)
        }
    }
    handleChange= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.createTopic(this.state)
    }
    render(){
        return(
            <div class="form-div">
                <form onSubmit={this.handleSubmit} class="topic-form">
                    {/* <label htmlFor="title" class="titleLabel">Post title:</label> */}
                    <input type="text" class="title" name="title" onChange={this.handleChange} placeholder={"Title your post"}/>
                    {/* <label htmlFor="body" class="bodyLabel">Post body</label> */}
                    <textarea name="body" class="body" onChange={this.handleChange} placeholder={"Body"} rows="5" cols="65"/>
                    <input type="submit" value="Submit Post" class="btn btn-outline-secondary" class="topic-submit" name="topic-submit"/>
                </form>
            </div>
        )
    }


}

export default NewTopic