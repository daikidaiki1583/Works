import React from 'react'
import './setfile.styles.scss'

const SetFile = React.forwardRef((props,ref) => {
    return(
        <input ref={ref} type="file"/>
    )
}) 


export default SetFile;