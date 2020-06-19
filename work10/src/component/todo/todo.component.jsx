import React from 'react'
import './todo.styles.scss'

const ToDo = ({text,handleClick,id}) =>{
        return(
            <div className='todo' key={id} id={id} >
                {text}
                <span onClick={handleClick}>×</span>
            </div>
         )

}

export default ToDo