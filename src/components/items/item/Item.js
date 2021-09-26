import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({product}) => {


    return (
        <li className="item-container col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 ">
            <div className="item d-grid ">
                <div >
                
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                        
                    
                    {
                        product.stock < 1 &&
                        <div className="alert alert-danger">
                                Sin stock
                        </div>
                    }
                    
                    
                </div>
                <Link className="btn btn-outline-dark btn-detalle" to={`/product/${product.id}`}> Ver detalle</Link>
                   <img  src={'/imgs/' + product.imgUrl} alt={product.name} /> 
                   
            </div>
        </li>
    )
};

export default Item;