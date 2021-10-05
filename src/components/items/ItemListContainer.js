import { useState ,useEffect } from 'react';
import ItemList from "./itemList/ItemList";
import Loader from '../UI/loader/Loader';
import { getItems } from '../../services/firebase';
const ItemListContainer = ({titulo,greeting,categoryId}) => {
    
    const [products,setProducts] = useState([]);
    
    useEffect(()=> {
            getItems(categoryId).then(res => {
                setProducts(res);
            }).catch(error => {
                console.log(error);
            });
     
        return () => {
            setProducts([]);
        };
    },[categoryId]);

   

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-12 my-5 py-5 text-center">
                    <h2>{titulo}</h2>
                    <p>{greeting}</p>
                    {
                        products.length > 0 ?
                        <ItemList products={products}/> :
                        <Loader/>

                    } 
                </div>
            </div>

        </section>
    )
}

export default ItemListContainer;