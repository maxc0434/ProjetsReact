import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Form from './components/Form';
import Image from './components/Image';



class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />

        <Form/>
        
        <Image/>

        <Welcome/>

        <Maman />

      </div>
    )
  }

}

export default App;