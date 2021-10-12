

const CheckOutDetailListItem = ({item}) => {

    return (
        <tr>
            <th>{item.name}</th>
            <th> Cant . {item.quantity}</th>
        </tr>
    )
};

export default CheckOutDetailListItem;