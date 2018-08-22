import React from 'react';
import PropTypes from 'prop-types';
import './CarWheels.css';

export default function CarWheels(props) {
    const sizes = [19, 21];
    return (
        <div className="wheels-selection">
            <p className="wheels-selection-title">Wheels</p>
            <div className="wheels-selection-form">
                {sizes.map(size => {
                    return (
                        <label
                            className={`wheels-item size-${size} ${
                                size === props.wheelSize
                                    ? 'wheels-item-active'
                                    : ''
                            }`}
                            key={size}
                        >
                            <input
                                type="radio"
                                value={size}
                                name="wheel-size"
                                checked={props.wheelSize === size}
                                onChange={() => props.handleWheelsChange(size)}
                            />
                            <p>
                                {size}
                                &quot;
                            </p>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

CarWheels.propTypes = {
    wheelSize: PropTypes.number,
    handleWheelsChange: PropTypes.func
};
