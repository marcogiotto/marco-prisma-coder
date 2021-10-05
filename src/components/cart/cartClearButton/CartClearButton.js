
const CartClearButton = ({clearCart}) => {

    const deleteCart = () => {

        if(window.confirm('Esta seguro que quiere vaciar el carrito ?')){
            clearCart();
        }
    }

    return(
        <div className="text-center col-sm-12 col-md-6">
            <button onClick={deleteCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
};

export default CartClearButton;