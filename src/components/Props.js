import React, {Component} from 'react';


// const Grek = props => {
// return(
//     <div>
// <h1>Hello {props.name} Karka Academy {props.position}</h1>
// {props.children}
// </div>
// )
// }

class Grek extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <h1>Hello {this.props.name} Karka Academy {this.props.position}</h1>
              {this.props.children} 
            </div>
        );
    }
}
 
export default Grek
