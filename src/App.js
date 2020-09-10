import React, {Route, Component} from 'react';

import RecipeList from './RecipeList';



const App = () => {
  //const [messages, setMessages] = useState([]);
  //const handleSend = newMessage => {
  //  setMessages([newMessage, ...messages]);
  //};
  // <MessageList data={messages}/>  
  return (
    <div>
      <h1>Food Junkie</h1>
               
      <RecipeList />

    </div>
  );
};

export default App;
