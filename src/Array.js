import React from 'react'

export default function Array() {
    const names = ['Sumesh','Ramesh','Ramji']
    const namesList = names.map((name,index) => <h1 key = {index}>{index}{name}</h1> )
    return (
        <div>
            {namesList}
        </div>
    )
}


// export default function Array() {
//     const names = ['Sumesh','Ramesh','Ramji']
//     const namesList = names.map(name => <h1>{name}</h1> )
//     return (
//         <div>
//             {namesList}
//         </div>
//     )
// }

// export default function Array() {
//     const names = ['Sumesh','Ramesh','Ramji']
//     return (
//         <div>
//             <h1>{names[0]}</h1>
//             <h1>{names[1]}</h1>
//             <h1>{names[2]}</h1>
//         </div>
//     )
// }
