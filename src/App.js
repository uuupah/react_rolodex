import React from "react";
// import logo from "./logo.svg";
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

  render() {
    return (
      <div className="App">
        {// .map iterates across an array
        this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
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
