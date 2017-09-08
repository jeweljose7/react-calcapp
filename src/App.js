import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultcomponent from './resultcomponent.js';
import Valuecomponent from './valuecomponent.js';
import Buttons from './buttons.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.flag = '';
    
      this.state = {
         value:'',
         inter:0,
         result:0
         
      }
      this.clickhandler = this.clickhandler.bind(this);
  };    

  clickhandler(currentbutton) {
    
    
    var stateinter = this.state.inter;
    var statevalue = this.state.value;
    var currentinter = this.state.inter;
    var currentresult = this.state.result;

    var buttonvalue = currentbutton.target.id;
    // console.log("now:"+buttonvalue);
    // console.log("prev:"+statevalue);
    // console.log(buttonvalue);
    switch(buttonvalue) {
      case '0' :
      case '1' :
      case '2' :
      case '3' :
      case '4' :
      case '5' :
      case '6' :
      case '7' :
      case '8' :
      case '9' :
                { 
                  this.setState ({
                    value : statevalue+buttonvalue,
                    inter : parseInt(stateinter)*10+parseInt(buttonvalue )
                  });
                  break;
                }
      case '+' :
      case '-' :
      case '*' :
      case '/' :
                {
                  if(this.flag!='') {
                    alert("operator is already selected");
                    break;
                  }
                  else {
                    this.setState ({
                      value : statevalue+buttonvalue,
                      inter : 0,
                      result: currentinter,
                    });
                    this.flag = buttonvalue;
                    break;
                  }
                }

      case '=' : {
        switch(this.flag) {
          case '+' : 
                    {
                      this.setState ({
                        value : '',
                        inter : 0,
                        result: currentresult+currentinter
                      });
                      this.flag='';
                      break;
                    }  
          case '-' : 
                    {
                      this.setState ({
                        value : '',
                        inter : 0,
                        result: currentresult-currentinter
                      });
                      this.flag='';
                      break;
                    } 
          case '*' : 
                    {
                      this.setState ({
                        value : '',
                        inter : 0,
                        result: currentresult*currentinter
                      });
                      this.flag='';
                      break;
                    }
          case '/' : 
                    {
                      this.setState ({
                        value : '',
                        inter : 0,
                        result: currentresult/currentinter
                      });
                      this.flag='';
                      break;
                    }
        };
        break;
      }
      case 'c' :
      {
        this.setState ({
                        value : '',
                        inter : 0,
                        result: 0
                      });
                      this.flag='';
                      break;
      }

    }
  }

  render() {
    var buttonarray = [];
    for(var i=0;i<10;i++) {
      buttonarray[i] = <Buttons element={i} onClick={this.clickhandler} />;
    }
    var operators = ["+","-","*","/","=","c"];
    var operatorsarray = [];
    for( i=0;i<6;i++) {
      operatorsarray[i] = <Buttons element={operators[i]} onClick={this.clickhandler} />;
    }

    return (
      <div className="panel">
        <div className="result">
          <Valuecomponent passvalue={this.state.result} />
        </div>
        <div className="display">
         <Resultcomponent passvalue={this.state.value} />
        </div>
        

        <div className="buttonbody">
          {buttonarray}
          {operatorsarray}
        </div>

      </div>

    );
  }
}


export default App;
