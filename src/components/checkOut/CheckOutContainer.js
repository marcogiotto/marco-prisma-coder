import CheckOutForm from "./checkOutForm/CheckOutForm";
import CheckOutDetail from "./checkOutDetail.js/CheckOutDetail";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { addDoc, collection ,getDoc, Timestamp, writeBatch ,doc} from '@firebase/firestore';
import { db } from '../../services/firebase';
import MessageContext from "../../context/MessageContext";
import Loader from "../UI/loader/Loader";
import { useHistory } from "react-router";

const CheckOutContainer = () => {
    const {cartItems,getTotalAmount,clearCart} = useContext(CartContext);
    const {setMessages} = useContext(MessageContext);
    const [porcessingOrder, setProcessingOrder] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    let history = useHistory();
    
    
    useEffect(()=> {
        setTotalAmount(getTotalAmount());
    },[getTotalAmount]);

    const placeOrder = ( buyer) => {
        setProcessingOrder(true);
        const ObjOrder = {
            buyer :buyer ,
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
            addDoc(collection(db,'Orders'),ObjOrder).then((res)=> {
                batch.commit().then(()=> {        
                    setMessages('success',`La compra se proceso correctamente. Su numero de orden es : ${res.id} ` );
                }).catch((error)=> {
                    setMessages('error','Ocurrió un error. Vuelva a intentar nuevamente mas tarde');
                }).finally(()=> {
                    setProcessingOrder(false);
                    clearCart();
                    history.push('/products');
                })
            })
        }else{
            let itemsName = '';
            outOfStock.map(item => {
                itemsName+= ' ' + item.name;
            });
            setMessages('error', `Los siguentes productos no cuentan con stock : ${itemsName} . Debe eliminarlos del carrito para realizar la compra. `)
            history.push('/cart');
        }
 
    };

    return(
        <>
            {
                porcessingOrder ? 
                <div className="d-flex flex-column justify-content-center align-items-center"><Loader></Loader> Pagando</div>     : 
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                            <CheckOutForm makePayment={placeOrder} ></CheckOutForm>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <CheckOutDetail products={cartItems} getTotalAmount={getTotalAmount}></CheckOutDetail>
                    </div>
                </div>
            }
        </>
    )
};

export default CheckOutContainer;