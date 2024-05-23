import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Layout from '@theme/Layout';
import './my-react-page.css';

export default function MyReactPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isLoggedIn) {
            socket.current = io('http://localhost:5000');

            socket.current.on('connect', () => {
                console.log('Connected to server');
            });

            socket.current.on('chat message', (msg) => {
                console.log('Message received: ', msg);
                setMessages((prevMessages) => [...prevMessages, { text: msg.message, id: msg.id }]);
            });

            socket.current.on('disconnect', () => {
                console.log('Disconnected from server');
            });

            return () => {
                socket.current.disconnect();
            };
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (isLoggedIn) {
            scrollToBottom();
        }
    }, [messages, isLoggedIn]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/login?password=${password}`);
            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                alert('Invalid password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login');
        }
    };

    const handleSend = (event) => {
        if (event) {
            event.preventDefault();
        }
        if (input.trim()) {
            socket.current.emit('chat message', input);
            setInput('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend(event);
        }
    };

    return (
        <Layout>
            {!isLoggedIn ? (
                <div className="loginScreen">
                    <form onSubmit={handleLogin} className="loginForm">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="passwordInput"
                        />
                        <button type="submit" className="loginButton">Login</button>
                    </form>
                </div>
            ) : (
                <div className="chatRoom">
                    <ul className="messages">
                        {messages.map((msg, index) => (
                            <li key={index} className={msg.id === 'me' ? 'sentMessage' : 'receivedMessage'}>
                                {msg.id === 'me' ? 'Me: ' : `${msg.id}: `}{msg.text}
                            </li>
                        ))}
                        <div ref={messagesEndRef} />
                    </ul>
                    <form className="messageForm" onSubmit={handleSend}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="messageInput"
                            placeholder="Type a message..."
                        />
                        <button type="submit" className="sendButton">Send</button>
                    </form>
                </div>
            )}
        </Layout>
    );
}
