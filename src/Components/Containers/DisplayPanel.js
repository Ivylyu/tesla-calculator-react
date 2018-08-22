import React, { Component } from 'react';
import CarModel from '../CarModel/CarModel';
import CarStates from '../CarStates/CarStates';
import CarOptionPanel from '../CarOptionPanel/CarOptionPanel';
import CarClimate from '../CarClimate/CarClimate';
import CarWheels from '../CarWheels/CarWheels';
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
        this.handleClimateChange = this.handleClimateChange.bind(this);
        this.handleWheelsChange = this.handleWheelsChange.bind(this);
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
        const carConfig = { ...this.state.carConfig };
        const { DefaultOptions } = this.state;
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
            title === 'Speed'
                ? (carConfig['speed'] = newValue)
                : (carConfig['temperature'] = newValue);
            this.setState({ carConfig }, () => {
                this.carStatesUpdate();
            });
        }
        event.preventDefault();
    }

    decrease(event, title) {
        let currentOption;
        let minValue;
        let step;
        const { DefaultOptions } = this.state;
        const carConfig = { ...this.state.carConfig };
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
            title === 'Speed'
                ? (carConfig['speed'] = newValue)
                : (carConfig['temperature'] = newValue);
            this.setState({ carConfig }, () => {
                this.carStatesUpdate();
            });
        }
        event.preventDefault();
    }

    handleClimateChange() {
        const { climate } = this.state.carConfig;
        const carConfig = { ...this.state.carConfig };
        carConfig.climate = !climate;
        // carConfig['climate'] = !climate;
        this.setState({ carConfig }, () => {
            this.carStatesUpdate();
        });
    }

    handleWheelsChange(size) {
        const carConfig = { ...this.state.carConfig };
        carConfig.wheelSize = size;
        this.setState({ carConfig }, () => {
            this.carStatesUpdate();
        });
    }

    render() {
        const { carStates, carConfig, DefaultOptions } = this.state;
        return (
            <form className="display-panel">
                <h1 className="display-panel-topic">Range Per Charge</h1>
                <CarModel wheelSize={carConfig.wheelSize} />
                <div className="display-panel-carStates">
                    <CarStates carStates={carStates} />
                </div>
                <div className="display-panel-controller">
                    <div className="display-panel-speed-panel">
                        <CarOptionPanel
                            currentOption={carConfig.speed}
                            defaultOptions={DefaultOptions.speedPart}
                            increase={this.increase}
                            decrease={this.decrease}
                        />
                    </div>
                    <div className="display-panel-temp-panel">
                        <CarOptionPanel
                            currentOption={carConfig.temperature}
                            defaultOptions={DefaultOptions.tempPart}
                            increase={this.increase}
                            decrease={this.decrease}
                        />
                    </div>
                    <div className="display-panel-car-climate">
                        <CarClimate
                            mode={carConfig.temperature > 10}
                            climate={carConfig.climate}
                            handleClimateChange={this.handleClimateChange}
                        />
                    </div>
                    <div className="display-panel-car-wheels">
                        <CarWheels
                            wheelSize={carConfig.wheelSize}
                            handleWheelsChange={this.handleWheelsChange}
                        />
                    </div>
                </div>
                <div className="display-panel-notice">
                    <Notice />
                </div>
            </form>
        );
    }
}
export default DisplayPanel;
