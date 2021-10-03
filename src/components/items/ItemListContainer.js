import { useState ,useEffect } from 'react';
import ItemList from "./itemList/ItemList";
import Loader from '../UI/loader/Loader';
import {db} from '../../services/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ({titulo,greeting,categoryId}) => {
    
    const [products,setProducts] = useState([]);
    
    useEffect(()=> {
        if(!categoryId){
            getDocs(collection(db,'Items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id,...doc.data()}
                });

                setProducts(products);
            }).catch((error) => {
                console.log(error);
            });
        }else{
            getDocs(query(collection(db,'Items'), where('categoryId','==',categoryId))).then((querySnapshot)=> {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id,...doc.data()};
                });
                setProducts(products);
            }).catch((error) => {
                console.log(error);
            });
        }
        return () => {
            setProducts([]);
        }
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