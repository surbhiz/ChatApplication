import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import './Join.css';
import logo from './chat-room-icon-10.jpg';

const Join=()=>{
    const [name, setName]=useState('');
    const [room, setRoom]=useState('');

    return (
        <div className="OuterContainer">
          <div className="otherOuterContainer">
            
  <h1 className="mainheading"><img src= {logo} alt="Logo" className="chatlogo"></img>ChatRoom</h1>
  <p className="subheading">Connect with friends and chat with people around you.</p>
  </div>
          <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"><img src= {logo} alt="Logo" className="chatlogo1"></img> Let's Chat!</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
      </div>
      
    </div>
    )
}

export default Join;