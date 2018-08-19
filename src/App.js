import React, { Component } from 'react';
import Panel from './Components/Containers/Panel';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Panel />
            </div>
        );
    }
}
export default App;

/* <App> -- Application entry point
 <Header></Header>
  <TeslaBattery> -- Container
 	<TeslaCar />     -- Presentational Component
 	<TeslaStats />   -- Presentational Component 
 	<TeslaCounter /> -- Presentational Component
 	<TeslaClimate /> -- Presentational Component
 	<TeslaWheels />  -- Presentational Component
 	<TeslaNotice />  -- Presentational Component
  </TeslaBattery>
</App> */
