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
    handleChange= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createTopic(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">Post title:</label>
                    <input type="text" name="title" onChange={this.handleChange}/>
                    <label for="body">Post body</label>
                    <textarea name="body" onChange={this.handleChange} />
                    <input type="submit" value="Submit Post" />
                </form>
            </div>
        )
    }


}

export default NewTopic