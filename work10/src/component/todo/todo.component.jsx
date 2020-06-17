import React from 'react'
import './todo.styles.scss'

const ToDo = ({text,id}) =>{
        return(
            <div className='todo' id={id} >{text}</div>
         )

}

export default ToDo