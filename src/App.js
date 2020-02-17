import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      staff: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ staff: users }));
  }

  // arrow function binds the context, allowing you to set "this" when the function is defined
  // when our component is run for the first time it sees the "handlchange" method that points to an arrow function
  // the compiler upon seeing the this, binds the this to the location the (e) was defined, the app component
  // equivalent to using:
  // this.handleChange = this.handleChange.bind(this);
  // in the constructor
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { staff, searchField } = this.state;
    const filteredStaff = staff.filter(staffMem =>
      staffMem.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>ZooKeys Incorporated</h1>
        <SearchBox
          placeholder="search staff"
          handleChange={this.handleChange}
        />
        <CardList staff={filteredStaff} />
      </div>
    );
  }
}

export default App;

// const {staff, searchField} = this.state;
// is shorthand for
// const staff = this.state.monsters;
// const searchField = this.state.searchField;

// a note on binding
// good rule of thumb is:
// use arrow functions on any class methods you define and arent part of react (ie render(), componentDidMount())

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
