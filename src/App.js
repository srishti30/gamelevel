import React, { Component } from 'react';

import './App.css';
import  Input from './components/Input.jsx';
import Result from './components/Result.jsx';


class App extends Component {
  
  render() { 
    return ( <React.Fragment>
      <Input />
      <Result/>
      </React.Fragment> );
  }
}
 
export default App;