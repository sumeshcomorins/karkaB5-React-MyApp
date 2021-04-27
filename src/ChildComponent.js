import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick ={() => props.GreekHandler('Child')}>Greet</button>
        </div>
    )
}

export default ChildComponent
