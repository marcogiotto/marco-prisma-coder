import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartListContainer from "../components/cart/CartListContainer";
import CartNoItemsMessage from "../components/cart/cartNoItemsMessage/CartNoItemsMessage";
const Cart = () => {

    const {cartItems} = useContext(CartContext);

    
    return(
        <>
            <section className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>CART PAGE</h2>
                    </div>
                </div>
                { 
                    cartItems.length > 0 ? 
                    <CartListContainer/> :
                    <CartNoItemsMessage/>
                
                }
            </section>
        </>
    )
}

export default Cart;