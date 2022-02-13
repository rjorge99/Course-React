import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        console.log(inputValue);
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={e => handleInputChange(e)}
            />
        </form>
    );
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
