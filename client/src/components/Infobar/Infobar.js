import React from 'react';


import onlineIcon from './online.png';
import closeIcon from './close.png';

import './Infobar.css';

const Infobar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    <a href="/"><img src={closeIcon} alt="close icon" /></a>

    </div>
  </div>
);

export default Infobar;