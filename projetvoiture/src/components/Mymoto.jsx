import { Component } from "react";
import Motos from "./Motos";

class Mymoto extends Component {
  state = {
    motos: [
      {
        name: "Triumph",
        modele: "SpeedTriple",
        year: "2013",
        color: "white",
        engine: "136cv",
      },

      {
        name: "Honda",
        modele: "CMX 500 Rebel",
        year: "2025",
        color: "black",
        engine: "45cv",
      },
    ],
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1> Mon garage Moto</h1>

        {
          this.state.motos.map(
            ({ name, modele, year, color, engine }, index) => {
              console.log({name})
              
            return (
              <div key={index}>
                <Motos
                    modele={modele}
                    year={year}
                    color={color}
                    engine={engine}>
                        {name}
                </Motos>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Mymoto;
