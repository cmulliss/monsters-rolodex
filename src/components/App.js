import React, { Component } from 'react'
import './App.css'
import { CardList } from './CardList/CardList'
import SearchBox from './SearchBox/SearchBox'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }
  // this is a special keyword, references the context in which it is invoked, allows us to reference the state
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // destucturing, pull properties off an object and then set to constants. On RHS, the object we want to destructure off, state in this case, on our component
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // we can do this.handleChange because we are passing the whole callback
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
// fetch returns a promise, which gives us a response
// .then((users) => console.log(users))
// we have access to our props here using 'this'
// list of monsters goes in as children to <CardList/>
// const { monsters, searchField } = this.state is equivalent to saying:
// const monster = this.state.monsters etc
// <CardList monsters={this.state.monsters}></CardList>
/*
<SearchBox
          placeholder='search monsters'
          // this is an anonymous fn, used in order to set state.
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
*/
// You want to avoid setting state setState({}) inside your render function because it is no longer 'pure'.
