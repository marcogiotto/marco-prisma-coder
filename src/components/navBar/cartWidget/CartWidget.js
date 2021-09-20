import './CartWidget.css';

const CartWidget = ({cartItems}) => {

    return (
        
              <a className="cartButton"  href=""><i  className="bi bi-cart2"></i> {cartItems > 0 && <span className="badge badge-primary">{cartItems}</span>}</a>
        
    )

}

export default CartWidget;