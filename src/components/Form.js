import React, { Component } from 'react'
import axios from 'axios' 

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username :'',
             comments :'',
             topic :'react'
        }
    }
    userNameChange = event =>{
        this.setState ({
            username : event.target.value
        })
    }

    commentsNameChange = event =>{
        this.setState ({
            comments : event.target.value
        })
    }

    topicNameChange = event =>{
        this.setState ({
            topic : event.target.value
        })
    }

    handleSubmit = event =>{
        
        // alert (`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
        console.log (this.state)
        axios
        .post('http://localhost/React/server/ServerPhp.php?actionVal=savedata',this.state)
        // .post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)

        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
               <lable>username</lable>
               <input type="text" 
               value={this.state.username}
               onChange ={this.userNameChange}/>
            </div>
            <div>
                <lable>Comments</lable>
                <textarea value={this.state.comments}
                onChange ={this.commentsNameChange}/>
            </div>
            <div>
                <lable>Topic</lable>
                <select value={this.state.topic} onChange ={this.topicNameChange}>
                    <option value="react">React</option>
                    <option value="anguler">Anguler</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
            
        )
    }
}
