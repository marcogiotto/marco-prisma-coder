import { useEffect,useState } from "react";
import ItemDetail from './itemDetail/ItemDetail';
import Loader from "../UI/loader/Loader";
import {db} from '../../services/firebase';
import { getDoc,doc} from "@firebase/firestore";




const ItemDetailContainer = ({productId}) => {

    const [item, setItem] = useState([]);

    useEffect(()=> {

        getDoc(doc(db,'Items',productId)).then((querySnapshot) => {
            const itemArray = [];
            const item = {id : querySnapshot.id,...querySnapshot.data()};
            itemArray.push(item);
           
            setItem(itemArray);
        }).catch((error) => {
            console.log(error);
        });
        
        return () => {
            setItem([]);
        }
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