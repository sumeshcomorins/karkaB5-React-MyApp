// import React from 'react';
// const NameList = () => {
//     const persons = [
//         {
//           id: 1,
//           name: 'Bruce',
//           age: 30,
//           skill: 'React'
//         },
//         {
//           id: 2,
//           name: 'Clark',
//           age: 25,
//           skill: 'Angular'
//         },
//         {
//           id: 3,
//           name: 'Diana',
//           age: 28,
//           skill: 'Vue'
//         }
//       ]
//       const personList =  persons.map(person=><h1>I am {person.name}. My Age is {person.age}.</h1>)
//     return ( 
//         <div>
//          {personList}
//         </div>
//      );
// }
 
// export default NameList;




// import React from 'react';
// import Person from './Person';
// const NameList = () => {
//     const persons = [
//         {
//           id: 1,
//           name: 'Bruce',
//           age: 30,
//           skill: 'React'
//         },
//         {
//           id: 2,
//           name: 'Clark',
//           age: 25,
//           skill: 'Angular'
//         },
//         {
//           id: 3,
//           name: 'Diana',
//           age: 28,
//           skill: 'Vue'
//         }
//       ]
//       const personList =  persons.map(person => <Person  person={person}/>)
//     return ( 
//         <div>
//          {personList}
//         </div>
//      );
// }
 
// export default NameList;



import React from 'react';
import Person from './Person';
const NameList = () => {
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
      const personList =  persons.map(person => <Person key={person.name}  person={person}/>)
    return ( 
        <div>
         {personList}
        </div>
     );
}
 
export default NameList;