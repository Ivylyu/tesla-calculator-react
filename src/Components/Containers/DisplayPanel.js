import React, { Component } from 'react';
import CarModel from '../CarModel/CarModel';
import CarStates from '../CarStates/CarStates';
import Notice from '../Notice/Notice';
import { getModelData } from '../../ModelData';
import './DisplayPanel.css';

class DisplayPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carStates: [],
            carConfig: {
                speed: 55,
                temperature: 20,
                climate: true,
                wheelSize: 19
            }
        };
        this.carStatesUpdate = this.carStatesUpdate.bind(this);
    }

    componentDidMount() {
        this.carStatesUpdate();
    }

    carStatesUpdate() {
        const models = ['60', '60D', '75', '75D', '90D', 'P100D'];
        const { carConfig } = this.state;
        const modelData = getModelData();
        const carStates = models.map(model => {
            const { speed, temperature, climate, wheelSize } = carConfig;
            const miles =
                modelData[model][wheelSize][climate ? 'on' : 'off'].speed[
                    speed
                ][temperature];
            return { model, miles };
        });
        this.setState({ carStates });
    }

    render() {
        const { carConfig, carStates } = this.state;
        return (
            <form className="panel">
                <h1 className="panel-topic">Range Per Charge</h1>
                <CarModel wheelSize={carConfig.wheelSize} />
                <CarStates carStates={carStates} />
                <Notice />
            </form>
        );
    }
}
export default DisplayPanel;
