import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Post title:</label>
                    <input type="text" name="title" onChange={this.handleChange}/>
                    <label htmlFor="body">Post body</label>
                    <textarea name="body" onChange={this.handleChange} />
                    <input type="submit" value="Submit Post" />
                </form>
            </div>
        )
    }


}

export default NewTopic