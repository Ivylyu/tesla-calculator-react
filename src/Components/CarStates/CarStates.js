import React from 'react';
import PropTypes from 'prop-types';
import './CarStates.css';

export default function CarStates(props) {
    return (
        <div className="car-states">
            <ul className="car-states-ul">
                {props.carStates.map(state => {
                    return (
                        <li key={state.model} className="car-states-ul-li">
                            <div
                                className={`tesla-model-icon icon-${state.model.toLowerCase()}`}
                            />
                            <p className="car-states-ul-li-p">
                                {state.miles}
                                <sup>MI</sup>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

CarStates.propTypes = {
    CarStates: PropTypes.array
};
