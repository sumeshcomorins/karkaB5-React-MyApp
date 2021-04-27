import React, {Component} from 'react';


// const Grk = ({name, position}) => {
// return(
//     <div>
// <h1>Hello {name} Karka Academy {position}</h1>

// </div>
// )
// }



const Grk = props => {
    const {name, position} = props
return(
    <div>
<h1>Hello {name} Karka Academy {position}</h1>
</div>
)
}





// class Grk extends Component {
//     state = {  }
//     render() { 
//         const {name, position} = this.props
//         return ( 
//             <div>
//               <h1>Hello {name} Karka Academy {position}</h1>
//               {this.props.children} 
//             </div>
//         );
//     }
// }
 
export default Grk
