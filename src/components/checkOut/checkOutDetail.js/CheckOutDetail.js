import CheckOutDetailList from "../checkOutDetailList.js/CheckOutDetailList";
const CheckOutDetail = ({products,getTotalAmount}) => {

    return (
        <>
           
                <h3 className="text-center">Detalle pedido</h3>
                <p className="text-center">Total : $ {getTotalAmount()} </p>
                <div>
                    <CheckOutDetailList products={products}></CheckOutDetailList>
                
                </div>

                
           
        </>
    )
};

export default CheckOutDetail;