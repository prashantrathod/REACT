import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sda', name: 'Max', age: 28},
      { id: 'sad', name: 'Manu', age: 29},
      { id: 'dfs', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;


    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // mapping an array into an array with jsx elements
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          
    </div> 
      ) ;

      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); // classes = ['red'];
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className="App">
        <h1>Hi, I'm a react App </h1>  
        <p className={classes.join(' ')}>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null ,'Hi, I\'m a react App') )
  }
}

export default App;








// { this.state.showPersons === true ?
//   <div>
//       <Person 
//         name={this.state.persons[0].name} 
//         age={this.state.persons[0].age}/>
//       <Person 
//         name={this.state.persons[1].name} 
//         age={this.state.persons[1].age}
//         click={this.switchNameHandler.bind(this, 'Prashant')} 
//         changed={this.nameChangedHandler} >My Hobbies : Racing</Person>
//       <Person 
//         name={this.state.persons[2].name} 
//         age={this.state.persons[2].age}/>

//   </div> : null
// }