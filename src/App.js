import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: '456', name: 'Manu', age: 29 },
      { id: '789', name: 'Staphine', age: 26 }
    ],
    otherState: 'some other value',
    userName: 'ken chen',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };


  switchUserNameHandler = () => {
    this.setState({
      userName: 'ken cindy'
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    console.log(person);
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({persons: persons});
  };

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  togglePresonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let first_assignment = null;

    if (false) {
      first_assignment = (
        <div>
          <UserOutput
            click={this.switchUserNameHandler}
            name={this.state.userName}
          >
          </UserOutput>
          <UserOutput name={this.state.userName}>
          </UserOutput>
          <UserInput
            userName={this.state.userName}
            changed={this.userNameChangedHandler}
          >
          </UserInput>
        </div>
      );
    };

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>This is really working!</h1>
        <button
          style={style}
          onClick={this.togglePresonsHandler}>Switch Name</button>
        {persons}
        {first_assignment}
      </div>
    );
  };
};

export default App;

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });
//
//   const [otherState, setOtherState] = useState('abc');
//
//   console.log(personsState, otherState);
//
//
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };
//
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
//
// export default App;
