import React, { Component } from 'react'

export default class IfElse extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggIn :true
        }
    }
    
    render() {
        // if (this.state.isLoggIn){
        //     return <div>Welcome Sumesh</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }


       return this.state.isLoggIn ?(
            <div>Welcome Sumesh</div>
        ):(
            <div>Welcome Guest</div>
        )

    // return this.state.isLoggIn && <div>Welcome Sumesh</div>
        return (
            <div>
                
            </div>
        )
    }
}
