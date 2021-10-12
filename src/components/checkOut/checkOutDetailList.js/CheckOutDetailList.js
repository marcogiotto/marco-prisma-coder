import CheckOutDetailListItem from "../checkOutDetailListItem/CheckOutDetailListItem";
const CheckOutDetailList = ({products}) => {

    return (
        <table className="table">
            <tbody>

            
             {products.map(item => <CheckOutDetailListItem item={item} key={item.id}></CheckOutDetailListItem> )}
             </tbody>
        </table>
    )
   
}

export default CheckOutDetailList;