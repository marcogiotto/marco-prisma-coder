import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = ({cartItems}) => {

    return (
        
              <Link className="cartButton"  to="/cart"><i  className="bi bi-cart2"></i> {cartItems > 0 && <span className="badge badge-primary">{cartItems}</span>}</Link>
        
    )

}

export default CartWidget;