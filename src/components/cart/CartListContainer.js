import { useContext, useState, useEffect } from 'react';
import CartList from './cartList/CartList';
import CartContext from '../../context/CartContext';


const CartListContainer = () => {
    const {clearCart,cartItems,removeItem,getTotalAmount} = useContext(CartContext);
   
    const deleteItemFromCart = (itemId)=> {
        removeItem(itemId);
    
    };

    


    return(
       
        <div className="row">
            <div className="col-sm-12 col-lg-8 m-auto">
                <CartList  cartItems={cartItems} deleteItemFromCart={deleteItemFromCart} getTotalAmount={getTotalAmount} clearCart={clearCart}/>
            </div>
        </div>
        
    )
};

export default CartListContainer;