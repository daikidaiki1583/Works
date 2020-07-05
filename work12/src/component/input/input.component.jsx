import React from 'react'
import './input.styles.scss'

const Input = ({handleChange,...otherProps}) => {
    
    return(
            <input 
                onChange={handleChange}
                {...otherProps}
            />
    )

}



export default Input