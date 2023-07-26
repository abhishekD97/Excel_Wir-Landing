import React from 'react';

const NavBrand = () => {
  const logoStyle = {
    fontSize: '50px',
    color: '#333',
    marginRight: '10px'
  };

  const logoTextStyle = {
    fontSize: '30px',
    color: '#333',
    textTransform: 'uppercase'
  };

  return (
    <div className="navbar-container">
      <div className="logo" style={logoStyle}>
        XL
      </div>
      <div className="logo-text" style={logoTextStyle}>
        Excel Wires and Conductors
      </div>
    </div>
  );
};

export default NavBrand;
