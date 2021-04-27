import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}. My Age is {person.age}.</h1>
        </div>
    )
}
