import React from 'react';

import onlineIcon from './online.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    
    {
      users
        ? (
          <div>
            <h2>Online users:</h2>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                      <img alt="Online Icon" src={onlineIcon} className="online"/>
                    {name}
                     
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;