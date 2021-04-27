import React,{useState} from 'react'

// function HookCounterTwo() {
//     const defaultCount = 0
//     const [count,setCount] = useState(defaultCount)
//     return (
//         <div>
//             Count : {count}
//             <button onClick={() =>setCount(defaultCount)}>Reset</button>
//             <button onClick={() =>setCount(count + 1)}>Increment</button>
//             <button onClick={() =>setCount(count - 1)}>Degrement</button>
//         </div>
//     )
// }

function HookCounterTwo() {
    const defaultCount = 0
    const [count,setCount] = useState(defaultCount)

    const incrementFive = () =>{
        for(let i=0;i<5;i++){
            setCount (prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() =>setCount(defaultCount)}>Reset</button>
            <button onClick={() =>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() =>setCount(prevCount => prevCount - 1)}>Degrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}

export default HookCounterTwo
