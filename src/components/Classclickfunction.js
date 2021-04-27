import React, { Component } from 'react'

export default class Classclickfunction extends Component {
    clickHandler(){
        console.log('Button Clicked')
    }
    render() {
        return (
            <div>
                <button onClick ={this.clickHandler}>click Me</button>
            </div>
        )
    }
}
