
const CartClearButton = ({clearCart}) => {

    const deleteCart = () => {

        if(window.confirm('Esta seguro que quiere vaciar el carrito ?')){
            clearCart();
        }
    }

    return(
        <div className="text-center">
            <button onClick={deleteCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
};

export default CartClearButton;