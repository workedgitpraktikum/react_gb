import './Message.css'
const Message = ({ text, author }) => {
  return (
    <div className="message">
        <h4>{author}</h4>
        <p>{text}</p>
    </div>
  );
}

export default Message;
