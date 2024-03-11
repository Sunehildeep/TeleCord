import { connectToSocketIO, receiveMessage, sendMessage } from "@/api/socket-io";
import React, { useEffect, useState } from "react";

const ChatArea = () => {
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState('');

    useEffect(() => {
        const socket = connectToSocketIO();
        return () => {
            socket.connect();
        };
    }, []);

    const handleMessageChange = (event : any) => {
        setMessage(event.target.value);
    };
    
    const message1: SendMessage = {
        message: message,
        community_id: 1,
        user_id: 2
    };
    
    const handleSendMessage = () => {
        sendMessage(message1);
        setMessage('');
        receiveMessage(setReceivedMessage)
    };

  return (
    <div>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>Send Message</button>
      <p>Received message: {receivedMessage}</p>
    </div>
  );
};

export default ChatArea;