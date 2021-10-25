//import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./comonents/card-list/card-list-component";
import { SearchBox } from "./comonents/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="h1"> Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => {
            this.setState({ searchFeild: e.target.value });
          }}
        />

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
