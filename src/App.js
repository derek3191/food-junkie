import React, {useState} from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

const App = () => {
  //const [messages, setMessages] = useState([]);
  //const handleSend = newMessage => {
  //  setMessages([newMessage, ...messages]);
  //};
  // <MessageList data={messages}/>  
  return (
    <div>
      <NewMessageForm />

    </div>
  );
};

export default App;
