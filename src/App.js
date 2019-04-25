import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import CharBlock from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: '456', name: 'Manu', age: 29 },
      { id: '789', name: 'Staphine', age: 26 }
    ],
    otherState: 'some other value',
    userName: 'ken chen',
    showPersons: false,
    input: '',
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  deleteCharBlock = (charIndex) => {
    const input = this.state.input.split('');

    input.splice(charIndex, 1);

    const updatedInput = input.join('');

    this.setState({input: updatedInput});
  }


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

  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value
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
    let chars = null;

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
    }

    chars = (
      <div>
        {this.state.input.split('').map((char, index) => {
          return (
            <CharBlock
              text={char}
              key={index}
              click={() => this.deleteCharBlock(index)}
            />
          )
        })}
      </div>
    );

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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>This is really working!</h1>
        <button
          style={style}
          onClick={this.togglePresonsHandler}>Switch Name</button>
        {persons}
        {first_assignment}
        <input type="text" onChange={this.inputChangedHandler} value={this.state.input}/>
        <p style={style}>{this.state.input.length}</p>
        <Validation length={this.state.input.length}/>
        {chars}
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
