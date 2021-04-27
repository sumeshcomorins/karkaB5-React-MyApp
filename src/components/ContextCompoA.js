import React, { Component } from 'react'
import ContextCompoB from './ContextCompoB'

export default class ContextCompoA extends Component {
    render() {
        return (
            <div>
                <ContextCompoB/>
            </div>
        )
    }
}
