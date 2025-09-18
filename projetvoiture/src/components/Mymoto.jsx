import { Component } from "react";
import Motos from "./Motos";
import styled from "styled-components";
import speedPhoto from "../assets/speedtriple.jpg";
import cmxPhoto from "../assets/cmxrebel.jpg";


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
        img: speedPhoto,
        photoVisible: false,
      },

      {
        name: "Honda",
        modele: "CMX 500 Rebel",
        year: "2025",
        color: "black",
        engine: "45cv",
        img: cmxPhoto,
        photoVisible: false,
      },
    ],
  }


  showPhoto = (index) => { 
    // Utilisation setState avec fonction qui prend prevState ( prevState = etat précédent, dans notre cas photovisible = false)).
    this.setState( (prevState) => {
      // création d'un nouveau tableau newMotos en parcourant l'ancien tableau avec map.
      // map renvoi un nouveau tableau soit avec des objet identique OU modifié (dans ce cas on va modifier quelque chose) de chaque élément indexé dans le tableau.
      const newMotos = prevState.motos.map ((moto,i) => {
        // Si l'index courant (bouton clic dans la card correspondante) correspond à celui passé en argument du map ((moto, i)),
        if (i === index ) {
          // Alors on retourne une copie de l'objet moto en modifiant le state photoVisible de false => true.
          // ... = spreadOperator = permet de "copier" un objet avec tous ses paramètres tout en permettant de modifier/ajouter/supprimer 
// les paramètres de cet objet sans modifier le state de l'objet initial.
          return {...moto, photoVisible: true};
        }
        // (else) sinon nous retourne moto sans aucun changement.
        return moto;
      });
      // retourne un nouvel objet state avec [motos] mis a jour.
      return {motos: newMotos};
    } )
   };




  render() {
    console.log(this.props)
    return (
      <div>
        <Title>
          Mon Garage Moto
          </Title> 

        {
          this.state.motos.map(
            ({ name, modele, year, color, engine, img, photoVisible }, index) => {
              
            return (
              <div key={index}>
                <Motos
                    modele={modele}
                    year={year}
                    color={color}
                    engine={engine}
                    // si photovisible est true => envoie img, sinon => envoie null.
                    // {condition (photoVisible) ? valeur si vrai : valeur si faux }
                    img={photoVisible ? img : null}
                    newImg={() => this.showPhoto(index)}
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
