import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },

      { name: "Mercedes", color: "black", year: 2010 },

      { name: "Peugeot", color: "blue", year: 2024 },
    ],
  };

  addTenyears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({ updatedState });
  };

  getAge = year => {
    const now = new Date().getFullYear();
    const age = now - year;

    let frenchYearStr = ""
    if(age === 1 ) {
      frenchYearStr = "an";
      } else if (age>1) {
        frenchYearStr = "ans";
      }
      return `${age} ${frenchYearStr}`;
  }

  render() {
    const age = new Date().getFullYear();
    
    return (
      <div>
        <h1>{this.props.title}</h1>
        {console.log(this.state)}

        <button onClick={this.addTenyears}> + 10ans </button>

        {this.state.voitures.map(({name, color, year}, index) => {
          return (
            <div key={index}>
              <Car
                color={color}
                year={ age - year  + " ans"}
                annee={year}
              >
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
