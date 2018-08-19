import React, { Component } from 'react';
import CarModel from '../CarModel/CarModel';
import Notice from '../Notice/Notice';
import './Panel.css';

class Panel extends Component {
    render() {
        return (
            <form className="panel">
                <h1 className="panel-topic">Range Per Charge</h1>
                <CarModel />
                <Notice />
            </form>
        );
    }
}
export default Panel;
