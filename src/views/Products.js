import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemListContainer from "../components/items/ItemListContainer";

const Products = ({categories}) => {

    const [title, setTitle] = useState('Prisma shop');
    const [categoryId, setCategoryId] = useState('');
    const {id} = useParams();
    
    useEffect(()=> {
        if(id && categories.length > 0){
            const category = categories.find(cat => cat.key === id);
            setTitle(category.description);
            setCategoryId(category.id);
        }
        return () => {
            setTitle('Prisma shop');
            setCategoryId('');
        }
    },[id]); 
    
    return(
            <>  
                <ItemListContainer titulo={title} greeting="La mejor calidad y precio." categoryId={categoryId}></ItemListContainer>
            </>
    )
};

export default Products;