import { useContext, useEffect,useState } from "react";
import ItemDetail from './itemDetail/ItemDetail';
import Loader from "../UI/loader/Loader";
import { getItemById } from "../../services/firebase";
import MessageContext from "../../context/MessageContext";



const ItemDetailContainer = ({productId}) => {

    const [item, setItem] = useState([]);
    const {setMessages} = useContext(MessageContext);
    
    useEffect(()=> {
        getItemById(productId).then(res => {
            setItem(res);
        }).catch((error) => {
            setMessages(error);
        });

        return () => {
            setItem([]);
        };
    },[productId]);

    return (
        <section className="container my-5 py-5 text-center">
                {
                        item.length > 0 ?
                        item.map((res)=> <ItemDetail item={res} key={res.name}/>) :
                        <Loader/>
                }
        </section>
    )
};

export default ItemDetailContainer;