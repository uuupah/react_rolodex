import React from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "0001"
        },
        {
          name: "Dracula",
          id: "0002"
        },
        {
          name: "Zombie",
          id: "0003"
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;

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
