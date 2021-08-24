import React from 'react';
import NumberListItems from '../number-list-items';
import CountingDash from '../counting-dash';

import './app.css'

export default class App extends React.Component{
  
  state = {
    numberValues: ["1","2","3","+","4","5","6","-","7","8","9","*","0","/","="],
    firstNumber: "",
    secondNumber: "",
    action: "",
    result: ""
  }
  newNumberArrive = (item) =>{
    console.log("newNumberArrive:", item);
    if(this.state.action === ""){
      this.setState((state) =>{
          if(item !== "=" && item !== "+" && item !== "-" && item !== "*" && item !== "/"){
            const newNumber = state.firstNumber + item;
            return{
                firstNumber: newNumber
            }
          } else if(item === "*" || item === "/" || item === "-" || item === "+"){
              if(item === "*"){
                  return{
                      action: "*"
                  }
              }
              else if(item === "/"){
                return{
                    action: "/"
                }
              }
              else if(item === "-"){
                return{
                    action: "-"
                }
            }
            else if(item === "+"){
                return{
                    action: "+"
                }
            }
          }
      });
    }
    else if(this.state.action !== ""){
        this.setState((state) =>{
            if(item !== "=" && item !== "+" && item !== "-" && item !== "*" && item !== "/"){
              const newNumber = state.secondNumber + item;
              return{
                secondNumber: newNumber
              }
            }
            else if(item === "=" && state.secondNumber !== ""){
              let firstN = parseInt(state.firstNumber, 10);
              let secondN = parseInt(state.secondNumber, 10);
              let res;
              if(state.action === "+"){
                res = firstN + secondN;
              } else if(state.action === "-"){
                res = firstN - secondN;
              } else if(state.action === "/"){
                res = firstN / secondN;
              } else if(state.action === "*"){
                res = firstN * secondN;
              }
              return{
                firstNumber: res,
                secondNumber: "",
                action: ""
              }
            }
        });
    }

  }
  render(){

    return(
        <div>
            <CountingDash
            firstNumber={this.state.firstNumber}
            secondNumber={this.state.secondNumber}
            action={this.state.action}
            ></CountingDash>
            <NumberListItems
            numberValues={this.state.numberValues}
            onClickNumberHappen={this.newNumberArrive}
            >

            </NumberListItems>
        </div>
    );
  }
}