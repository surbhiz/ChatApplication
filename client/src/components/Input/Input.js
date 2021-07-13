import React from 'react';

import './Input.css';
import send from './send.png';
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    
    />
    
    <button className="sendButton" onClick={e => sendMessage(e)}><img src= {send} alt="Send" className="send"/></button>
  </form>
)

export default Input;