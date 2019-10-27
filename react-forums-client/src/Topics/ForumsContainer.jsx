import React, { Component } from 'react';
import Topics from './TopicList/Topics'
import TopicShow from './TopicShow/TopicShow'
import NewTopic from './NewTopic/NewTopic'
import {Route, Switch, Redirect, Link} from 'react-router-dom'


class ForumContainer extends Component {
    constructor(){
        super();
        this.state = {
            topics: []
        }
    }
    componentDidMount(){
        this.getTopics();
    }
    getTopics= async () =>{
        try{
            const response = await fetch('http://localhost:3001/topics');
            console.log(response)
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            const parsedTopics = await response.json()
            console.log(parsedTopics)
            await this.setState({topics: parsedTopics.data})
        } catch(err){
            return err
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
            this.setState({topic: [...this.state.topics, newJSONtopic.data]})
            await <Redirect to='topics/' />
        }catch(err){
            console.log(err)
        }
    }


    render(){
        return(
            <div>
                This is forums container
                <Switch>
                    <Route exact path="/topics" render={(props)=> <Topics topics={this.state.topics} />}/>
                    <Route exact path="/topics/new" render={(props)=><NewTopic createTopic={this.createTopic}/>}/>
                    <Route path="/topics/:id" component={TopicShow} getTopics={this.getTopics} />
                </Switch>             
            </div>
        )
    }
}

export default ForumContainer;