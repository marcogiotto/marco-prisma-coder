import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import CartItem from "../cartItem/CartItem";
import CartClearButton from "../cartClearButton/CartClearButton";
import CartPlaceOrderButton from "../cartPlaceOrderButton/CartPlaceOrderButton";
const CartList = ({getTotalAmount,cartItems,clearCart,deleteItemFromCart,placeOrder}) => {

    
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => <CartItem key={item.name} deleteItem={deleteItemFromCart} item={item}/>)}
                <tr style={{background: 'lightgray'}}>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>$ {getTotalAmount()}</th>
                </tr>
            </tbody>

        </table>
        <div className="row">
        <CartClearButton clearCart={clearCart}/>
        <CartPlaceOrderButton placeOrder={placeOrder}/>
        </div>
        </>
    );
};

export default CartList;