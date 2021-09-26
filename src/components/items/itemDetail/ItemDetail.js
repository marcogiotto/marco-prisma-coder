import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../../context/CartContext';
const ItemDetail = ({item}) => {
    
    //const [itemCount,setItemCount] = useState(0);
    const [buttonCart,setButtonCart] = useState(false);
    const {addItem} = useContext(CartContext);
    const onAdd = (count) => {

        addItem(item,count);
        setButtonCart(true);
    }
    return(
            <>
            <div className=" row item-detail-container">
                <div className="col-sm-12 col-md-6 item-detail-img">
                    <img src={`/imgs/${item.imgUrl}`} alt={item.name} />
                </div>
                <div className="col-sm-12 col-md-6 item-detail-data">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-sm-12 col-lg-6">
                            <ul>
                                <li>$ {item.price}</li>
                                <li>
                                    {
                                        item.stock > 0 ?
                                        <span className="item-con-stock">En stock</span> :
                                        <span className="item-sin-stock">Sin stock</span>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            {!buttonCart ?
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount> :
                            <Link className="btn btn-success" to="/cart">Terminar compra</Link>}
                        </div>
                    </div>
                </div>
            </div>    
            </>
    );
}

export default ItemDetail;