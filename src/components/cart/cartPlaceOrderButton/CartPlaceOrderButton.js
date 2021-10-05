
const CartPlaceOrderButton = ({placeOrder}) => {

    return(
        <div className="text-center col-sm-12 col-md-6">
            <button onClick={placeOrder} className="btn btn-success">Realizar compra</button>
        </div>
    )
};

export default CartPlaceOrderButton;