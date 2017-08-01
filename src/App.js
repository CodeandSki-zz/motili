import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import job from './index2';
import ComponentExample from './ComponentExample';



class App extends Component {
  constructor(props) {
    // console.log(job);

    super(props);
    this.state = {
      date: "08/21/17",
      
    };
  }
  
  render() {
  alert('Hello! I went ahead and added ES6 sytax and cleaned up the provided object and functions. They are now in a file called index2.js. I also created a basic component called component example that takes one property');

const
    essentials = Object.keys(job.essentials),
    essentials1 = essentials.map((key) => {
        return <ComponentExample
                  header={key}
                  key={key}>
                  </ComponentExample>;
    });
  

    console.log(essentials1)




      
  return (

      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2
          >Hi, Motili!</h2>
        </div>
        <div className="container">
          <div className="row">
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="col-sm-12 jobArray jobArray1"></h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <ComponentExample
              header={job.headline}
              list={essentials1}
             ></ComponentExample>
          </div>
          <div className="row">
         <ComponentExample
            header={"Methodology"}
          ></ComponentExample>
            <div className="row">
              <ComponentExample
                header={"Specs"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Portfolio"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Equipment"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Technologies"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Bonus Points"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Other"}
              ></ComponentExample>
            </div>
            <div className="row">
              <ComponentExample
                header={"Misc"}
              ></ComponentExample>
            </div>
          </div>
            
          </div>
          
        
         
        </div>
      // </div>
    );
  }
}

export default App;

