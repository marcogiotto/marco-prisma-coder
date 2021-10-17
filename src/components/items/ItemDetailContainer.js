import { useContext, useEffect,useState } from "react";
import ItemDetail from './itemDetail/ItemDetail';
import Loader from "../UI/loader/Loader";
import { getItemById } from "../../services/firebase";
import MessageContext from "../../context/MessageContext";



const ItemDetailContainer = ({productId}) => {

    const [item, setItem] = useState([]);
    const {setMessages} = useContext(MessageContext);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        getItemById(productId).then(res => {
           
            setItem(res);
        }).catch((error) => {
            setMessages(error);
        }).finally(() => {
            setLoading(false);
        });

        return () => {
            setLoading(true);
            setItem([]);
        };
    },[productId]);
    
    return (
        <section className="container my-5 py-5 text-center">
                {
                        !loading ?
                         item.map(item => <ItemDetail item={item} key={item.name} />) :
                        <Loader/>
                }
        </section>
    )
};

export default ItemDetailContainer;