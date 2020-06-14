import React from 'react';
import './button.styles.scss';

const Button = ({handleClick,children}) =>{
return(
        <button className='button' onClick={handleClick}>
            {children}
        </button>
    )    
} 

export default Button;

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     // this.children = this.children.bind(this);
    // }