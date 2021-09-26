import { createContext, useState} from "react";

const CartContext = createContext([]);


export  const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);


    const addItem = (item,quantity) =>{
            setCartItems((prevState)=> {
                if(prevState.filter(product => product.id === item.id).length > 0){
                    return prevState.map(product => {
                        console.log(item.id,product.id);
                        if(product.id === item.id){
                            product.quantity = product.quantity + quantity; 
                        }
                        return product;

                    });
                   
                }else{
                    return [{...item,quantity:quantity},...prevState];
                    
                }
               
            });
    };

    const removeItem = (itemId) =>{

        setCartItems((prevState) => {
            return prevState.filter(product => product.id !== itemId);
        });
    };

    const clearCart = () =>{

        setCartItems([]);

    };



    return (
        <CartContext.Provider value={{addItem,removeItem,clearCart,cartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;