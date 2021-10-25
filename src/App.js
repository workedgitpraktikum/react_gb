import { useState } from 'react';
import './App.css';
import Message from "./components/Message";

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="flex-container">
      {messageList.map(({ text, author }, i) => {
        return (
          <Message
            key={author + i}
            text={text} 
            author={author}
          />
        )
      })}
    </div>
  );
}

export default App;
