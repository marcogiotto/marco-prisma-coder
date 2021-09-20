import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';
const Item = ({product}) => {

    const [cart,setCart] = useState(0);

    const onAdd = (count) => {
        setCart(count); 
    }

    const onDelete = ()=> {
        setCart(0);
    }
    return (
        <li className="item-container col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 ">
            <div className="item d-grid ">
                <div >
                
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                        
                    
                    {
                        product.stock > 0 ?
                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} onDelete={onDelete}/> :
                        <div className="alert alert-danger">
                                Sin stock
                        </div>
                    }
                    <p className="py-2">{cart > 0 && 'Cantidad en carrito: ' + cart}</p>
                    
                </div>
                <Link className="btn btn-outline-dark btn-detalle" to={`/product/${product.id}`}> Ver detalle</Link>
                   <img  src={'/imgs/' + product.imgUrl} alt={product.name} /> 
                   
            </div>
        </li>
    )
};

export default Item;