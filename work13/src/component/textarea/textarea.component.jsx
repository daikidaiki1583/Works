import React from 'react'
import './textarea.styles.scss'

const Textarea = ({handleChange,...otherProps}) => {
    return(
        <textarea
            onChange={handleChange}
            {...otherProps}
        />
    )
}

export default Textarea