import { Component } from "react";
import Image from "./Image";
import "../Css/FormCss.css";
// import MyHead from "./MyHeaderOne";
// import styles from "../Css/myCss.module.css";
import styled from "styled-components";


const Title = styled.h1`
    color: red;
    font-size: 80px;
`
const Button = styled.button`
    background: black;
    font-size: 15px;
    color: #ffffff;
    padding: 10px 12px;
    border-radius: 8px;
    outline-style: auto;
    outline-width: 2px;
    outline-color: red;
    outline-offset: 2px;
`


//   const titreRouge = {
//     fontSize: "50px",
//     color: "green",
//   }

class Form extends Component {
  state = {
    username: " ",
    color: " ",
    colors: ["", "red", "blue", "green", "black", "pink"],
    comment: "",
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handleColor = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${this.state.username} Couleur: ${this.state.color} Comment: ${this.state.comment}`
    );
  };

  render() {
    // const myClass = this.props.head ? 'red' : 'blue';

    return (
      <div>
        <Image color={this.state.color} height="500" />

        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Pseudo</label>
            <input
              style={{ width: "350px", height: "50px", margin: "20px" }}
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>

          <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label>Commentaire</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleComments}
            ></textarea>
          </div>

          <div>
            <button type="submit">Submit</button>
            <button className="buttonBlue"> bouton Css Test Bootstrap </button>
          </div>

           
        </form>
         
         {/* <h1 className={styles.green}> Le composant MyHead </h1>
          <MyHead /> */}


            {/* <div>
                <h1 className="fw-bold text-primary mt-5">Nouveau Commentaire</h1>
                <button className="btn btn-outline-danger">Valider</button>
            </div> */}

        <div>
            <Title>Encore Un nouveau Commentaire</Title>
            <Button>Envoyer</Button>
        </div>


      </div>
    );
  }
}

export default Form;
