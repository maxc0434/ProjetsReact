
import { Component } from "react";
import "./App.css";
import MyCars from "./components/MyCars";



class App extends Component {
  state = {
    titre: 'Mon catalogue Voitures',
    sous_titre: "mes modèles",
    color: 'green',
    
  };

  render() {
    return (

      <div>
        <MyCars 
          title={this.state.titre} 
          subtitle={this.state.sous_titre} 
          myColor={this.state.color} />
        {/* ou alors <MyCars></MyCars> c'est pareil, c'est util lorsqu'on veut ajouter des composant enfant etre ces 2 balises */}
      </div>
    );
  }
}


export default App;


