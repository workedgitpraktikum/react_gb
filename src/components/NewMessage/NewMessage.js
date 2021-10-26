import { useState } from 'react';
import './NewMessage.css';

const NewMessage = ({ handleButtonClick }) => {
  const [messageText, setMessageText] = useState('');

  return (
    <>
      <textarea
        className="new-message"
        placeholder="Введите текст сообщения..."
        value={messageText}
        onChange={(e) => {
          setMessageText(e.target.value)
        }} 
      />
      <div>
        <button 
          className="new-message-btn"
          disabled={!messageText}
          onClick={() => {
            handleButtonClick(messageText);
            setMessageText('')
          }}
        >Отправить</button>
      </div>
    </>
  );
}

export default NewMessage;
