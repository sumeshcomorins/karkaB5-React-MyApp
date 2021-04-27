import React, { Component } from 'react'
import { UserConsumer } from './ContextUser'

export default class ContextCompoC extends Component {
    render() {
        return (
           <UserConsumer>
            {
                (username) =>{
                    return <div>Hello{username}</div>
                }
            }
           </UserConsumer>
        )
    }
}
