import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemListContainer from "../components/items/ItemListContainer";

const Products = ({categories}) => {

    const [title, setTitle] = useState('Prisma shop');
    const {categoryId} = useParams();
    
    useEffect(()=> {
        if(categoryId && categories.length > 0){
            const category = categories.find(cat => cat.id === categoryId);
            setTitle(category.name);
        }
        return () => {
            setTitle('Prisma shop');
        }
    },[categoryId]); 
    
    return(
            <>  
                <ItemListContainer titulo={title} greeting="La mejor calidad y precio." categoryId={categoryId}></ItemListContainer>
            </>
    )
};

export default Products;