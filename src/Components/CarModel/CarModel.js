import React from 'react';
import PropTypes from 'prop-types';
import './CarModel.css';

export default function CarModel(props) {
    return (
        <div className="car-model">
            <div className="car-model-wheels">
                <div
                    className={`car-model-wheels-wheel-front wheel-size-${
                        props.wheelSize
                    }`}
                />
                <div
                    className={`car-model-wheels-wheel-back wheel-size-${
                        props.wheelSize
                    }`}
                />
            </div>
        </div>
    );
}

CarModel.propTypes = {
    wheelSize: PropTypes.number
};
