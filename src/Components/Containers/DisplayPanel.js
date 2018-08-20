import React, { Component } from 'react';
import CarModel from '../CarModel/CarModel';
import CarStates from '../CarStates/CarStates';
import CarOptionPanel from '../CarOptionPanel/CarOptionPanel';
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
            },
            DefaultOptions: {
                speedPart: {
                    title: 'Speed',
                    unit: 'mph',
                    min: 45,
                    max: 70,
                    step: 5
                },
                tempPart: {
                    title: 'Outside Temperature',
                    unit: '°',
                    min: -10,
                    max: 40,
                    step: 10
                }
            }
        };
        this.carStatesUpdate = this.carStatesUpdate.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.updateState = this.updateState.bind(this);
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

    increase(event, title) {
        let currentOption;
        let maxValue;
        let step;
        const { carConfig, DefaultOptions } = this.state;
        if (title === 'Speed') {
            currentOption = carConfig.speed;
            maxValue = DefaultOptions.speedPart.max;
            step = DefaultOptions.speedPart.step;
        } else {
            currentOption = carConfig.temperature;
            maxValue = DefaultOptions.tempPart.max;
            step = DefaultOptions.tempPart.step;
        }
        if (currentOption < maxValue) {
            const newValue = currentOption + step;
            this.updateState(title, newValue);
        }
        event.preventDefault();
    }

    decrease(event, title) {
        let currentOption;
        let minValue;
        let step;
        const { carConfig, DefaultOptions } = this.state;
        if (title === 'Speed') {
            currentOption = carConfig.speed;
            minValue = DefaultOptions.speedPart.min;
            step = DefaultOptions.speedPart.step;
        } else {
            currentOption = carConfig.temperature;
            minValue = DefaultOptions.tempPart.min;
            step = DefaultOptions.tempPart.step;
        }
        if (currentOption > minValue) {
            const newValue = currentOption - step;
            this.updateState(title, newValue);
        }
        event.preventDefault();
    }

    updateState(title, newValue) {
        const carConfig = { ...this.state.carConfig };
        title === 'Speed'
            ? (carConfig['speed'] = newValue)
            : (carConfig['temperature'] = newValue);
        this.setState({ carConfig });
    }

    render() {
        const { carStates, carConfig, DefaultOptions } = this.state;
        return (
            <form className="display-panel">
                <h1 className="panel-topic">Range Per Charge</h1>
                <CarModel wheelSize={carConfig.wheelSize} />
                <CarStates carStates={carStates} />
                <CarOptionPanel
                    currentOption={carConfig.speed}
                    defaultOptions={DefaultOptions.speedPart}
                    increase={this.increase}
                    decrease={this.decrease}
                />
                <CarOptionPanel
                    currentOption={carConfig.temperature}
                    defaultOptions={DefaultOptions.tempPart}
                    increase={this.increase}
                    decrease={this.decrease}
                />
                <Notice />
            </form>
        );
    }
}
export default DisplayPanel;
