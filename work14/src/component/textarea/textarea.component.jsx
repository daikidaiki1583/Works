import React from 'react'
import './textarea.styles.scss'

const Textarea = ({value,handleChange,...otherProps}) => {
    return(
        <textarea
            onChange={handleChange}
            value={value}
            {...otherProps}
        >
        </textarea>
    )
}

export default Textarea