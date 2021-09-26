import { useContext } from 'react';
import CartList from './cartList/CartList';
import CartContext from '../../context/CartContext';

const CartListContainer = () => {
    const {cartItems} = useContext(CartContext);

    return(
       
        <div className="row">
            <div className="col-sm-12 col-lg-8">
                <CartList/>
            </div>
        </div>
        
    )
};

export default CartListContainer;