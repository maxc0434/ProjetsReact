import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Form from './components/Form';
import Image from './components/Image';
import MyHead from './components/MyHeaderOne';

import Mymoto from './components/Mymoto';


class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        {/* <Mycars title={this.state.titre} />

        <Image/> */}

        <Welcome/>

        {/* <Maman /> */}

        {/* <Form
        head={true} /> */}
        
        <Mymoto 
        titre={this.state.titre}
        />

      </div>
    )
  }

}

export default App;