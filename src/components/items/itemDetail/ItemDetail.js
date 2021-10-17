import { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../../context/CartContext';
const ItemDetail = ({item}) => {
    
    
    const [buttonCart,setButtonCart] = useState(false);
    const {addItem,getItem} = useContext(CartContext);
    const [initialCount, setInitialCount] = useState(0);

    useEffect(()=> {
       
        if(item){
            const product = getItem(item.id);
            if(product.length > 0){
               
                setInitialCount(product[0].quantity);
            }else{
                setInitialCount(1);
            }
        }
        

    },[]);

    const productNotFound = () => {
        return <h2>{'El producto no existe.'}</h2>
    }
   
    const onAdd = (count) => {

        addItem(item,count);
        setButtonCart(true);
    }
    return(
            <>
            {
                item ?
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
                            <ItemCount initial={initialCount} stock={item.stock} onAdd={onAdd}></ItemCount> :
                            <Link className="btn btn-success" to="/cart">Terminar compra</Link>}
                        </div>
                    </div>
                </div>
            </div>    :
                productNotFound()

            }
            
            </>
    );
}

export default ItemDetail;