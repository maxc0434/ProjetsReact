import React, { Component } from 'react'
import Cars from './Cars';
import MyHeader from './MyHeader';

 class MyCars extends Component {

  state={
    cars: ["Mercedes", "Aston Martin", "Lotus"]
  }

  render() {

    console.log(this);
    return (
      <div>
            <MyHeader 
              myStyle={this.props.myColor}
            >
              {this.props.title}
            </MyHeader>

            <MyHeader 
            myStyle={this.props.myColor}
            >
             {this.props.subtitle} 
            </MyHeader>

            <Cars color="bleu">{this.state.cars[0]}</Cars>
            <Cars color="blanc">{this.state.cars[1]}</Cars>
            <Cars color="rouge">{this.state.cars[2]}</Cars>

      </div>
    )
  }
}

export default MyCars;
