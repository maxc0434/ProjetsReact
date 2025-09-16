import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';
import Maman from './components/Maman';


class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />

        <Welcome/>

        <Maman />

      </div>
    )
  }

}

export default App;