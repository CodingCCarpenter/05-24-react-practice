//React imports
import React, { Component } from 'react';

//Component imports
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

//styles import
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
  
  handleChange = (e) => {
    //handle change event handler for search box
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    //filter our monsters and store as new variable
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  };
};

export default App;
