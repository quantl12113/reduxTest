import React, { Component } from 'react';
import { createStore } from 'redux';
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
          <ListItem />
          <ButtonAction />
        </div>
      </Provider>
    );
  }
}

export default App;
