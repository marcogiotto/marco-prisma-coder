import { useContext } from "react";
import MessageContext from "../../../context/MessageContext";

const CartClearButton = ({clearCart}) => {
    const {setMessages} = useContext(MessageContext);
    const deleteCart = () => {

        if(window.confirm('Esta seguro que quiere vaciar el carrito ?')){
            clearCart();
            setMessages('success','Se vació el carrito correctamente.');
        }
    }

    return(
        <div className="text-center col-sm-12 col-md-6">
            <button onClick={deleteCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
};

export default CartClearButton;