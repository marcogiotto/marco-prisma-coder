
const CartItem = ({item,deleteItem}) => {

    const itemDelete = () => {
        
        if(window.confirm(`Esta seguro que quiere eliminar ${item.name}  del carrito ?`)){
            deleteItem(item.id);
        }
    }
    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price}</td>
                <td>$ {item.price * item.quantity}</td>
                <td><button className="btn-danger btn btn-sm" onClick={itemDelete}><i className="bi bi-trash"></i></button></td>
            </tr>
        </>
    );

};

export default CartItem;