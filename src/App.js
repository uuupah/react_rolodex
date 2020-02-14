import React from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// const {monsters, searchField} = this.state;
// is shorthand for
// const monsters = this.state.monsters;
// const searchField = this.state.searchField;

/*
 * weird watcher bug was solved using
 *
 * // I have had this error too. Try
 * //
 * // $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
 * // and
 * // $ sudo sysctl -p
 * //
 * // This document helped me
 * // https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details
 *
 * from
 * https://github.com/facebook/create-react-app/issues/7612
 *
 * this seems like a really ugly and potentially dangerous fix, but it is a fix
 */
