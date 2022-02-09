import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategory = ( {setCategories}) => {
    const [inputValue, setInputValue] = useState("");
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(cats => [inputValue,...cats ]);
        setInputValue("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}