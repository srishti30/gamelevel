import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = { 
    value:"",
    isGenerated: false,
    result: -999
   }
    handleSubmit = e =>{
       e.preventDefault();
      const result=this.calculateDiff();
      this.setState({ isGenerated: true, result })
   };
   handleChange = e => {
     let value=parseInt(e.currentTarget.value);
     value=value?value:""
     this.setState({value});

   };
   calculateDiff() {
   
    const rand = Math.ceil(Math.random() *100);
    console.log(rand);
    
    const difference=rand-this.state.value;
    return(difference);
   };
   renderResult() {
     const result = this.state.result;
     if(result === 0){
       return <div className="alert alert-success">Correct!</div>
     } else if(result >=1 && result <=4){
       return <div className="alert alert-danger">Hot!</div>
     }
       else if(result >=5 && result <=14)
       {
       return <div className="alert alert-warning">Warm</div>

     }
     else if(result>=15)
     {
       return <div className="alert alert-primary">Cold</div>
      
     } 
   }
   
  render() { 
    return ( 
      <div class="jumbotron jumbotron-fluid">
       <form onSubmit={this.handleSubmit}>
       <div className="container">
      <h1>Welcome to the number guessing game</h1>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">ENTER</label>
          <input
          autoFocus
           value={this.state.value}
           onChange={this.handleChange}
           type="text" 
           class="form-control mb-4" 
           id="inlineFormInput" size="50" 
           placeholder="Enter number between 1 to 100..."/>
           <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </div>
        </div>
        </div>
        </div>
        {this.state.isGenerated && this.renderResult()}
        </form>
        </div>
        );
  }
}
 
export default App;
  
