import { Component } from "react";
import Motos from "./Motos";
import styled from "styled-components";


// CSS
  const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-style: italic;
  font-weight: bold;
  font-size: 5em;
`

// Fin CSS

class Mymoto extends Component {
  state = {
    motos: [
      {
        name: "Triumph",
        modele: "SpeedTriple",
        year: "2013",
        color: "white",
        engine: "136cv",
        img: null,
      },

      {
        name: "Honda",
        modele: "CMX 500 Rebel",
        year: "2025",
        color: "black",
        engine: "45cv",
        img: null,
      },
    ],
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Title>
          Mon Garage Moto
          </Title> 

        {
          this.state.motos.map(
            ({ name, modele, year, color, engine, img }, index) => {
              
            return (
              <div key={index}>
                <Motos
                    modele={modele}
                    year={year}
                    color={color}
                    engine={engine}
                    img={img}
                >
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
