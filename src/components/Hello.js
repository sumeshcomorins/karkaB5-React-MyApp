import React,{Component} from 'react';



const Welcome = () => {
  // return React.createElement ('div',null,React.createElement('h1',null,'Welcome To My First React Presentation')  );
  return React.createElement ('div',{id:'hello', className:'dummyClass'},React.createElement('h1',null,'Welcome To My First React Presentation')  );
  // return React.createElement ('h1',null,'Welcome To My First React Presentation' );
  // return (
  //   <div className:'dummyClass'>
  //    <h1>Welcome to my First React Presentation </h1>
  //  </div>
  // )
}

 
export default Welcome;
