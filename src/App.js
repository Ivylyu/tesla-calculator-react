import React, { Component } from 'react';
import DisplayPanel from './Components/Containers/DisplayPanel';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <DisplayPanel />
            </div>
        );
    }
}
export default App;
