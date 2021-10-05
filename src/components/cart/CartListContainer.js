import { useContext, useState, useEffect } from 'react';
import CartList from './cartList/CartList';
import CartContext from '../../context/CartContext';
import { addDoc, collection ,getDoc, Timestamp, writeBatch ,doc} from '@firebase/firestore';
import { db } from '../../services/firebase';

const CartListContainer = () => {
    const {clearCart,cartItems,removeItem,getTotalAmount} = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [processingOrder,setProcessingOrder] = useState(false);
    
    useEffect(()=> {
        setTotalAmount(getTotalAmount());
    },[getTotalAmount]);
    const deleteItemFromCart = (itemId)=> {
        removeItem(itemId);
    
    };

    const placeOrder = () => {
        setProcessingOrder(true);
        const ObjOrder = {
            buyer :{ name: 'marco giotto',phone: '1162173399', email: 'marcogioto.mg@gmail.com'},
            items: cartItems,
            total : totalAmount,
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        ObjOrder.items.forEach((prod,i) => {
            getDoc(doc(db,'Items',prod.id)).then(DocumentSnapshot =>{
                if(DocumentSnapshot.data().stock >= ObjOrder.items[i].stock){
                    batch.update(doc(db,'Items',DocumentSnapshot.id),{
                        stock : DocumentSnapshot.data().stock - ObjOrder.items[i].quantity
                    })
                }else{
                    outOfStock.push({...DocumentSnapshot.data(),id: DocumentSnapshot.id});
                }
            })
        })

        if(outOfStock.length < 1){
            addDoc(collection(db,'Orders'),ObjOrder).then(()=> {
                batch.commit().then(()=> {
                    window.alert('La compra ser proceso correctamente.');
                }).catch((error)=> {
                    console.log(error);
                }).finally(()=> {
                    setProcessingOrder(false);
                    clearCart();
                    setTotalAmount(0);
                })
            })
        }else{
            let itemsName = '';
            outOfStock.map(item => {
                itemsName+= ' ' + item.name;
            });
            window.alert('Los siguentes productos no cuentan con stock :' + itemsName );
        }
 
    };


    return(
       
        <div className="row">
            <div className="col-sm-12 col-lg-8">
                <CartList placeOrder={placeOrder} cartItems={cartItems} deleteItemFromCart={deleteItemFromCart} getTotalAmount={getTotalAmount} clearCart={clearCart}/>
                {
                    processingOrder && <p>Procesando orden<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div></p>

                }
                {
                    
                }
            </div>
        </div>
        
    )
};

export default CartListContainer;