import React from 'react'

const SetFile = React.forwardRef((props,ref) => {
    return(
        <input type="file" ref={ref}/>
    )
}) 

export default SetFile