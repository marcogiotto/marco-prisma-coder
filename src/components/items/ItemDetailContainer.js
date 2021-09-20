import { useEffect,useState } from "react";
import ItemDetail from './itemDetail/ItemDetail';
import Loader from "../UI/loader/Loader";

const itemDetails = [
        {
            id: 1,
            name: 'Remera estampada',
            description: 'Remera estampada de bugsbunny',
            stock: 5,
            imgUrl: '1m.png',
            price: 1500,
            categoryId: 2,
        },
        {
            id: 2,
            name: 'Remera estampada',
            description: 'Remera estampada de los simpson.',
            stock: 0,
            imgUrl: '2m.png',
            price: 1200,
            categoryId: 2,
        },
        {
            id: 3,
            name: 'Trench',
            description: 'Trench edision limitada color beige',
            stock: 5,
            imgUrl: '3m.png',
            price: 2500,
            categoryId: 2,
        },
        {
            id: 4,
            name: 'Remera Negra estampada',
            description: 'Remera estampada de star wars',
            stock: 5,
            imgUrl: '2.png',
            price: 1500,
            categoryId: 1,
        },
        {
            id: 5,
            name: 'Remera blanca estampada',
            description: 'Remera blanca estampada con coyote',
            stock: 5,
            imgUrl: '3.png',
            price: 1800,
            categoryId: 1,
        },
        {
            id: 6,
            name: 'Remera Negra',
            description: 'Remera negra, temporada invierno 2021',
            stock: 5,
            imgUrl: '4.png',
            price: 1700,
            categoryId: 1,
        }
]

const getItem = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(itemDetails);
        },2000);
    });
}

const ItemDetailContainer = ({productId}) => {

    const [item, setItem] = useState([]);

    useEffect(()=> {
        
        getItem().then(result => {
            const product = result.filter(data => data.id == productId);
           
            setItem(product);

            
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