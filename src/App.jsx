import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import ListItem from './Components/listItem'
import ButtonAction from './Components/buttonAction'
import todoApp from './reducers'
import { Provider } from 'react-redux';

const store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ListItem />
          <ButtonAction />
        </div>
      </Provider>
    );
  }
}

export default App;
