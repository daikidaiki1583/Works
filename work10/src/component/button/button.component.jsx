import React from 'react'
import './button.styles.scss'

const Button = ({children}) => {
    return (
        <button type='submit'>
            {children}
        </button>
    )
}


export default Button