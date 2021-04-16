import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Dogs'])
    
    // const handleAdd = ()=>{
    //     // setCategories(c => c.concat('The 100'));
    //     setCategories([...categories, 'The 100']);
    // };

    return (
        <>
            <h2>Buscador Piedrero v1.0</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
        	
            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid 
                        key={category}
                        category={category}
                        />
                    })
                }
            </ol>
        </>
    )
}


export default GifExpertApp
