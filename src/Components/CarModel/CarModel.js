import React from 'react';
// import PropTypes from 'prop-types';
import './CarModel.css';

export default function CarModel(props) {
    return (
        <div className="tesla-car">
            <div className="tesla-wheels">
                <div
                    className={`tesla-wheel tesla-wheel--front tesla-wheel--${21}`}
                />
                <div
                    className={`tesla-wheel tesla-wheel--rear tesla-wheel--${19}`}
                />
            </div>
        </div>
    );
}

// CarModel.propTypes = {
//     wheelsize: PropTypes.number
// };
