import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'Attack on titan' ]);

    const onAddCategory = (newCategory) => {
        setCategories( [newCategory, ...categories]);

    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ event => onAddCategory(event)}
            />          
            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }

                    />
                ))
            }
            
        </>
    )
}
// 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