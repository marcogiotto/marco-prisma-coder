import { useContext, useEffect,useState } from "react";
import ItemDetail from './itemDetail/ItemDetail';
import Loader from "../UI/loader/Loader";
import { getItemById } from "../../services/firebase";
import MessageContext from "../../context/MessageContext";



const ItemDetailContainer = ({productId}) => {

    const [item, setItem] = useState(undefined);
    const {setMessages} = useContext(MessageContext);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        getItemById(productId).then(res => {
           
            setItem(res);
        }).catch((error) => {
            setMessages('error',error);
        }).finally(() => {
            setLoading(false);
        });

        return () => {
            setLoading(true);
            setItem([]);
        };
    },[productId]);// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <section className="container my-5 py-5 text-center">
                {
                        !loading ?
                         <ItemDetail item={item} /> :
                        <Loader/>
                }
        </section>
    )
};

export default ItemDetailContainer;