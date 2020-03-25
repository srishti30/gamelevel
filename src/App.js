import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Input from './components/Input.js';
import Inputtwo  from './components/Inputtwo.js';
import Inputthree  from './components/Inputthree.js';




class App extends Component {
   
  
  render() { 
    return ( 
      
     <React.Fragment>
     <Input/>
     
     
     
     <Router>
     <Switch>
    
     <Route path="/Inputtwo" exact component={Inputtwo} />
     <Route path="/Inputthree" exact component={Inputthree} />
      </Switch>
      </Router>
      </React.Fragment>
    );
      
  }
}
 
export default App;