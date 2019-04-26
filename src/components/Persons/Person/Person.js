import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rending');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="txt" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );

  }
}
// const person = ( props ) => {
//   console.log('[Person.js] rending');
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="txt" onChange={props.changed} value={props.name} />
//     </div>
//   )
// };

export default Person;
