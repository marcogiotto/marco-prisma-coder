import { Link } from "react-router-dom";

const CartNoItemsMessage = () => {

    return (
        <div className="row">
            <div className="col-sm-12 my-4 text-center">
            <p>No hay productos agregados al carrito</p>
            <Link className="btn btn-success" to="/products">Agregar productos</Link>
            </div>
        </div>
    )
};

export default CartNoItemsMessage;