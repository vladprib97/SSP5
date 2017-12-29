import React, { Component } from 'react';
import './App.css';
import Tabs from './Tab';
import Task from './Task/Task'

class App extends Component {
  render() {

    const tabData = [
      {
        label: "General",
        content: "20 years old student."
      },
      {
        label: "Education",
        content: "BSTU"
      },
      {
        label: "Contacts",
        content: "bbm20plus@gmail.com."
      }
    ]

    return (
      <div className="App">
      <Task />
      <Tabs data = {tabData} />
      </div>
    )
  }
}

export default App;
