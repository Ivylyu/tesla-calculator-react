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
