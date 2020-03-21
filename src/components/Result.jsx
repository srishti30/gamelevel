import React, { Component } from 'react';
class Result extends Component {
    state = {
    random: 999, 
    value:"",
    isGenerated: false,
    result: -999  }
    
   calculateDiff() {
       const {random, value} = this.state;
       return Math.abs(random - value);
   };
   renderResult() {
     const result = this.state.result;
     console.log(`Random: ${this.state.random}`);
     if(result === 0){
       return <div className="alert alert-success">Correct!</div>
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
            <div>
            {this.state.isGenerated && this.renderResult()}
            </div>
         );
    }
}
 
export default Result;