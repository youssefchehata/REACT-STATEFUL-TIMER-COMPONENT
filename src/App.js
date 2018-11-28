import React, { Component } from 'react';
import Dynamictimer from './Dynamic.js';
import Timer from './button';
import './App.css';



const data=[
  {
  button:"START"
},
{
  button:"RESET"
}
]



class App extends Component {
  render() {

    
    return (
      <div className="App">
     < Dynamictimer input={data}/>
        
        {/* <Time ms={this.state.timeMs} /> */}
        <Timer/>
        
      </div>
    );
  }
}

export default App;
