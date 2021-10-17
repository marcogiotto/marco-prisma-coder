import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import CartClearButton from "../cartClearButton/CartClearButton";
const CartList = ({getTotalAmount,cartItems,clearCart,deleteItemFromCart}) => {

    
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
        <div className="text-center col-sm-12 col-md-6">
             <Link to='/checkout' className="btn  btn-success">Realizar Compra</Link>
        </div>
       
        </div>
        </>
    );
};

export default CartList;