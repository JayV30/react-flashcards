import React, { PropTypes } from 'react';

const NavWidget = (props) => {
  return (
    <div className="nav-wrapper">
      <div id="nav-btn-back" className="nav-btn" onClick={props.goBack}><p>Back</p></div>
      <div id="nav-btn-menu" className="nav-btn" onClick={props.goMenu}><p>MENU</p></div>
      <div id="nav-btn-next" className="nav-btn" onClick={props.goNext}><p>Next</p></div>
    </div>
  );
}

// validation of props
NavWidget.propTypes = {
  goBack: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  goMenu: PropTypes.func.isRequired
}

export default NavWidget;