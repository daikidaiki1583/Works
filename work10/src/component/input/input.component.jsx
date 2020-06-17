import React from 'react';
import './input.styles.scss';

const Input = ({handleChange}) => {
        return(
                <input 
                onChange={handleChange}
                />

        )

}

export default Input