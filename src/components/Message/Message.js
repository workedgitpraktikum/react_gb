import { BOT } from '../../const';
import './Message.css';

const Message = ({ text, author }) => {
  return (
    <div className={
      `message ${author === BOT.name && "message-bot"}`
    }>
        <h4>{author}</h4>
        <p>{text}</p>
    </div>
  );
}

export default Message;
