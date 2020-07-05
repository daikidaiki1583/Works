import React from 'react'
import './button.styles.scss'

const Button = ({children,handleClick,...otherProps}) =>{
    return(
        <button onClick={handleClick} {...otherProps}>
            {children}
        </button>
    )
}

export default Button