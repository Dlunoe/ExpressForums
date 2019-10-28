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
            // console.log(parsedTopics)
            await this.setState({topics: parsedTopics.data})
        } catch(err){
            return err
        }
    }


    render(){
        return(
            <div>
                This is forums container
                <Switch>
                    <Route exact path="/topics" render={(props)=> <Topics topics={this.state.topics} />}/>
                    <Route exact path="/topics/new" component={NewTopic} />
                    <Route path="/topics/:id" component={TopicShow} getTopics={this.getTopics} />
                </Switch>             
            </div>
        )
    }
}

export default ForumContainer;