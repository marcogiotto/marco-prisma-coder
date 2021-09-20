import { useState ,useEffect } from 'react';
import ItemCount from "./itemCount/ItemCount";
import ItemList from "./itemList/ItemList";
import Loader from '../UI/loader/Loader';

const productsList = [
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

const getProducts = () => {

   
    return new Promise((resolve,reject) => {
        
        setTimeout(()=> {
                resolve(productsList);
        },2000);
    });
};

const ItemListContainer = ({titulo,greeting,categoryId}) => {
    
    const [products,setProducts] = useState([]);
    
    useEffect(()=> {
        getProducts().then(res => {
           if(categoryId){
               const category = res.filter(item => item.categoryId == categoryId);
               setProducts(category);
           }else{
               setProducts(res);
           }
        });
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