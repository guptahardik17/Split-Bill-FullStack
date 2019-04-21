import React, { Component } from 'react';
import CreateGroup from './components/CreateGroup.js';
import AddExpense from './components/AddExpense.js';
import GetDetails from './components/GetDetails.js';
class App extends Component {

  render() {
    return (
        <div>
          <CreateGroup />
          <hr />
          <AddExpense />
          <hr />
          <GetDetails />
        </div>
    );
  }
}

export default App;
