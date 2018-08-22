import React from 'react';
import './CarClimate.css';
import PropTypes from 'prop-types';

export default function CarClimate(props) {
    return (
        <button
            className={`climate-item 
                ${props.climate ? 'mode-active' : ''}  
                ${!props.mode ? 'heat-mode' : ''} `}
            onClick={props.handleClimateChange}
            type="button"
        >
            <p className="climate-item-p">
                {props.mode ? 'ac' : 'heat'} {props.climate ? 'on' : 'off'}
            </p>
            <div className="climate-item-icon" />
        </button>
    );
}

CarClimate.propTypes = {
    mode: PropTypes.bool,
    climate: PropTypes.bool,
    handleClimateChange: PropTypes.func
};
