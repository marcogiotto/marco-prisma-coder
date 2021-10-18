import { useState ,useEffect, useContext } from 'react';
import ItemList from "./itemList/ItemList";
import Loader from '../UI/loader/Loader';
import { getItems } from '../../services/firebase';
import MessageContext from '../../context/MessageContext';
const ItemListContainer = ({titulo,greeting,categoryId}) => {
    
    const [products,setProducts] = useState([]);
    const {setMessages} = useContext(MessageContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
            setLoading(true);
            getItems(categoryId).then(res => {
                setProducts(res);
            }).catch((error) => {
                setMessages('error',error);
            }).finally(() => {
                setLoading(false);
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
                        !loading?
                        <ItemList products={products}/> :
                        <Loader/>

                    } 
                </div>
            </div>

        </section>
    )
}

export default ItemListContainer;