import './ItemCount.css';
import { useState ,useEffect} from "react";


const ItemCount = ({stock,initial,onAdd}) => {

    const [currentStock, setStock] = useState(stock);
    const [initialCount, setInitialCount] = useState(initial);
    const [disabledButton, setDisabledButton] = useState(false);
    
    
    useEffect(() => {
      setInitialCount(initial);
    },[initial]);

    const addItem = () => {

        if(initialCount < currentStock){
            
            setInitialCount(prevCount => {
                return prevCount + 1;
            });
            if(disabledButton){
                setDisabledButton(false);
            }
        }

    }

    const decreaseItem = () => {

        if(initialCount > 0){
            let result = initialCount - 1;
            setInitialCount( prevCount => {
                return prevCount - 1;
            });
            
            if(result === 0){
                setDisabledButton(true);
            }
        }
        
    }

    const addCart = () => {

        if(currentStock > 0 && initialCount > 0){

            onAdd(initialCount);

        }

    }


    const showButton = () => {

        if( currentStock > 0){
                return <button className="btn btn-outline-success" disabled={disabledButton} onClick={addCart} >Agregar Item</button>
            
        }else{
            return <div className="alert alert-danger" role="alert">
                No hay stock del producto.
          </div>
        }
    }

    return (
        <div className="countItem-container">
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-sm btn-outline-secondary" onClick={decreaseItem}><i className="bi bi-dash-lg"></i></button>
                <p>{initialCount}</p>
                <button className="btn btn-sm btn-outline-secondary" onClick={addItem}><i className="bi bi-plus-lg"></i></button>
            </div>
            
            
            { showButton() }
            
        </div>
    )
}

export default ItemCount;