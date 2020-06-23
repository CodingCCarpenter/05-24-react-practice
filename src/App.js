import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => {
          //if we want to do something immediately after setting the state, then we want to 
          //pass in a function as a second argument to our setState method. Essentially saying setState and do this
          this.setState({ searchField: e.target.value }, () => 
            console.log(this.state));
        }}/>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  };
};

export default App;
