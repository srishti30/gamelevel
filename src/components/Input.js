import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Input extends Component {
    state = {
    random: 999, 
    value:"",
    isGenerated: false,
    result:-999,
    isResult:0
   }
   componentDidMount() {
       const random = Math.ceil(Math.random()*100);
       this.setState({random});
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
       const {random, value} = this.state;
       return Math.abs(random - value);
   };
    renderResult() {
     
     const result = this.state.result;
     console.log(`Random: ${this.state.random}`);
     if(result === 0){
      
         
     
       return <div className="alert alert-success">Correct answer..move to the nextlevel<Link to='/Inputtwo' className="btn btn-info danger"  >Level2</Link></div>
        
     
     } else if(result >=1 && result <=4){
       return <div className="alert alert-danger">Hot!</div>

     }
       else if(result >=5 && result <=14)
       {
       return <div className="alert alert-warning">Warm</div>

     }
     else 
     {
       return <div className="alert alert-primary">Cold</div>
      
     } 
     
   }
    render() { 
        return (
            <div className="jumbotron jumbotron-fluid">
       <form onSubmit={this.handleSubmit}>
       <div className="container">
      <h1>Welcome to the level one</h1>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInput">ENTER</label>
          <input
          autoFocus
           value={this.state.value}
           onChange={this.handleChange}
           type="text" 
           className="form-control mb-4" 
           id="inlineFormInput" size="50" 
           placeholder="Enter number between 1 to 100..."/>
           <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </div>
        </div>
        </div>
        </div>
        {this.state.isGenerated && this.renderResult()

        }
        </form>
        </div>
          );
    }
}
 
export default Input;

