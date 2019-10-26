import React, { Component } from 'react';
import Topics from './TopicList/Topics'


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



    render(){
        return(
            <div>
                This is forums container
                <Topics topics={this.state.topics} />
            </div>
        )
    }


}

export default ForumContainer;