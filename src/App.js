// --------------------------------------------------------------------------------------------------------------------
// LR Easy Label Print © 2024 by l Simonnet is licensed under Attribution NonCommercial-NoDerivatives 4.0 International
//
// LR Easy Label Print use a deployed service to print labels.
// See http://localhost:8087/getting_started.html or http://auborddesmauves.fr/products/lrplugins for documentation.
// --------------------------------------------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------------------------------------------
import UsersAppBar from './components/user-app-bar';
import LRForm from './components/lrForm';
import Nav from './components/nav/leftAccordion';
import './App.css';
import ListenerManager from './components/app-event/ListenerManager';
import Typography from '@mui/material/Typography';
import { Component } from 'react';

class App extends Component {

  listenerManager = new ListenerManager();


  constructor(props) {
    super(props);
    this.state = {
      showNav : false
    };
  
    
    this.listenerManager.addEventListener(this);
  }

  render() {

    let nav ;
    if(this.state.showNav){ 
      nav = <Nav />;
    }   

    return (
      <div className="App">

          <UsersAppBar className="Nav-bar"  listenerManager={this.listenerManager} />
          <div className="content" >
            <LRForm/>
          </div>
          <Typography variant="overline" component="div" sx={{color: 'white', backgroundColor: 'darkgray', textAlign: 'right', paddingRight: "10px", fontSize:"0.6em"}} gutterBottom>
          © Au Bord des Mauves</Typography>

      </div>
    );
  }

  eventFired(event){

    console.log("Receiving event  [ Code : "  + event.code + " - Message : " + event.message +"] in App.js");

    if(event.code === "bar:01"){
      this.setState ({showNav : !this.state.showNav});
    }
  }
}

export default App;