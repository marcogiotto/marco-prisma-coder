import { useContext } from "react";
import  MessageContext  from "../../context/MessageContext";
import './Message.css';
const Message = () => {

    const {message,messageStatus} = useContext(MessageContext);

    if(message === ''){
        return null;
    }

    return (
        <div className={`toast align-items-center  ${messageStatus}-message  ${message ? 'show' : ''}  ` } role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className={`toast-body  ${messageStatus}-message ` }  >
                {message }
                </div>
        
            </div>
        </div>
    )

};

export default Message;