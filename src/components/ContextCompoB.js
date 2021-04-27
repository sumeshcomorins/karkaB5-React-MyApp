import React, { Component } from 'react'
import ContextCompoC from './ContextCompoC'
import UserContext from './ContextUser'

class ContextCompoB extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component B Context {this.context}
                <ContextCompoC/>
            </div>
        )
    }
}


// ContextCompoB.contextType = UserContext
export default ContextCompoB