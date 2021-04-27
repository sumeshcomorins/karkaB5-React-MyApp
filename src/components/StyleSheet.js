import React from 'react'
import './MyStyle.css'

// export default function StyleSheet() {
//     return (
//         <div>
//             <h1 className='primary'>My Style </h1>
//         </div>
//     )
// }

export default function StyleSheet(props) {
    let Class = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={Class}>My Style </h1>
        </div>
    )
}