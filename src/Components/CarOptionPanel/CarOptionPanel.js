import React from 'react';
import PropTypes from 'prop-types';
import './CarOptionPanel.css';

export default function CarOptionPanel(props) {
    return (
        <div className="option-panel">
            <p className="option-panel-title">{props.defaultOptions.title}</p>
            <div className="option-panel-container">
                <p className="option-panel-container-num">
                    {props.currentOption}
                    <sup>{props.defaultOptions.unit}</sup>
                </p>
                <div className="option-panel-container-control">
                    <button
                        onClick={event => props.increase(event, props.defaultOptions.title)}
                        disabled={props.currentValue >= props.defaultOptions.max}
                    />
                    <button
                        onClick={event => props.decrease(event, props.defaultOptions.title)}
                        disabled={props.currentValue <= props.defaultOptions.min}
                    />
                </div>
            </div>
        </div>
    );
}

CarOptionPanel.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    defaultValues: PropTypes.object
};
