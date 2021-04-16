import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e,setValueFunction) => {
        setValueFunction( e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }else{
            alert('Búsqueda invalida.')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} placeholder="Nueva busqueda" onChange={(e) => handleInputChange(e,setInputValue)}></input>    
        </form>
    )   
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
