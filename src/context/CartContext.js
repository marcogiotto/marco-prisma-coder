import { createContext, useContext, useState} from "react";
import MessageContext from "./MessageContext";

const CartContext = createContext([]);


export  const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const {setMessages} = useContext(MessageContext);


    const addItem = (item,quantity) =>{
            setCartItems((prevState)=> {
                if(prevState.filter(product => product.id === item.id).length > 0){
                    return prevState.map(product => {
                        console.log(item.id,product.id);
                        if(product.id === item.id){
                            product.quantity =  quantity; 
                        }
                        return product;

                    });
                   
                }else{
                    return [{...item,quantity:quantity},...prevState];
                    
                }
               
            });

        setMessages('success',`Se agrego el producto ${item.name} al carrito.`);
    };

    const removeItem = (itemId) =>{

        setCartItems((prevState) => {
            return prevState.filter(product => product.id !== itemId);
        });
        setMessages('success',`Se quito el producto del carrito.`);
    };

    const getItem = (itemId) => {
        return cartItems.filter(item => item.id === itemId);
    };
    const clearCart = () =>{

        setCartItems([]);
        

    };

    const getTotalItems = () => {
        if(cartItems.length > 0){
                return cartItems.reduce((previousValue,currentValue) => previousValue + currentValue.quantity , 0);
        }
        return 0;
    };

    const getTotalAmount = () => {

        return cartItems.reduce((previousValue,currentValue) => previousValue + (currentValue.price * currentValue.quantity), 0);
    };


    return (
        <CartContext.Provider value={{addItem,removeItem,clearCart,cartItems,getTotalItems,getTotalAmount,getItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;