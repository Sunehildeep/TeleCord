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
        receiveMessage((data : any) => {
            if ( data.community_id === 1){
                setReceivedMessage(data.message);
            }
        })
    };

    const translateMessage = () => {
        // Translate message
    };

  return (
    <div>

        <div className="bg-gray-300 py-4 px-3">
            <div className="container mx-auto flex justify-end items-center">
            {/* Translate button */}
            <button className="text-sm text-white bg-gray-600 hover:bg-gray-700 py-2 px-3 rounded" onClick={translateMessage}>
                Translate
            </button>

            {/* other menu items here */}
            </div>
        </div>

      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>Send Message</button>
      <p>Received message: {receivedMessage}</p>
    </div>
  );
};

export default ChatArea;