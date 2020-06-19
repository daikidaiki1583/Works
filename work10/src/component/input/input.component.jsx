import React from 'react';
import './input.styles.scss';

const Input = ({handleChange,value}) => {

        return(
                <input
                onChange={handleChange}
                value={value}
                >
                </input>

        )

}

export default Input