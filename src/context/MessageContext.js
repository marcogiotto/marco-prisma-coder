import { createContext, useState } from "react";

const MessageContext = createContext([]);

export const MessageContextProvider = ({children}) => {

    const [message, setMessage] = useState('');
    const [messageStatus, setMessageStatus] = useState('');

    const setMessages = (status,message) => {

        setMessage(message);
        setMessageStatus(status);

        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    return( 
        <MessageContext.Provider value={{setMessages,message,messageStatus}}>
            {children}
        </MessageContext.Provider>    
    )
};

export default MessageContext;