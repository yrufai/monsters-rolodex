import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {

  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(user => this.setState({ monsters: user }))
  }
  handleChange = (e) => {
    return this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className="monster">Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
