import io from 'socket.io-client';

const socket = io('http://127.0.0.1:5000');

export const connectToSocketIO = () => {
    socket.on('connect', () => {
        console.log('Connected to socket.io');
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from socket.io');
    });

    return socket;
}

export const sendMessage = (message: string) => {
    socket.emit('message_send', message);
}