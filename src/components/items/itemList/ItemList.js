
import Item from '../item/Item';
import './ItemList.css';



const ItemList = ({products}) => {
   
    
    return (
            <ul className="ItemList row">
            { products.map(item => <Item product={item} key={item.id}/>)}
            </ul>
    )
};

export default ItemList;