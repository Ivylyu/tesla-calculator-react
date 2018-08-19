import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img className="header-image" src={logo} alt="TESLA" />
        </div>
    );
}

// const Header = () => (
//     <div className="header">
//       <img src={logo} alt="TESLA" />
//     </div>
//   )

// export default Header;
