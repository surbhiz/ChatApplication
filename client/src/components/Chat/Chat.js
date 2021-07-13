import React, {useState, useEffect} from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from "socket.io-client";
import Infobar from '../Infobar/Infobar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import TextContainer from '../TextContainer/TextContainer';
const ENDPOINT='localhost:5000';
let socket;

const Chat=({location})=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        
        const { name, room }= queryString.parse(location.search);
        socket=io(ENDPOINT, { transport : ['websocket'] });
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room});

        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT, location.search]);
    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);
    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message, ()=> setMessage(''));
        }
    }
    console.log(message, messages);

    return (
        <div className="outerContainer">
      <div className="container">
          <Infobar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    )
}

export default Chat;