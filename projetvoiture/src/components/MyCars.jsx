import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },

      { name: "Mercedes", color: "black", year: 2010 },

      { name: "Peugeot", color: "blue", year: 2025 },
    ],
  };

  addTenyears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({ updatedState });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;

    let frenchYearStr = age > 1 ? "ans" : "an";
    
    return `${age} ${frenchYearStr}`;
  };

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        {console.log(this.state)}

        <button onClick={this.addTenyears}> + 10ans </button>

        {this.state.voitures.map(({ name, color, year }, index) => {
          return (
            <div key={index}>
              <Car 
              color={color} 
              age={this.getAge(year)} 
              year={year}>
                {name}
              </Car>
            </div>
          );
        })}

        {/* 
"Equivalent sans la boucle" :
        <Car annee={this.state.voitures[0].year} year={year - this.state.voitures[0].year + " ans"} color={this.state.voitures[0].color}>
          {this.state.voitures[0].name}
        </Car>

        <Car annee={this.state.voitures[1].year} year={year - this.state.voitures[1].year + " ans"} color={this.state.voitures[1].color}>
          {this.state.voitures[1].name}
        </Car>

        <Car annee={this.state.voitures[2].year} year={year - this.state.voitures[2].year + " ans"} color={this.state.voitures[2].color}>
          {this.state.voitures[2].name}
        </Car> */}
      </div>
    );
  }
}

export default Mycars;
