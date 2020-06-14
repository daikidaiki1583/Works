import React from 'react';
import { connect } from 'react-redux';
import './counter.styles.scss';
import Button from '../button/button.component'; 
import { countUp , countDown } from '../../action/index';
 
class Counter extends React.Component {

    // constructor(props){
    //     super(props);
    //     // console.log(props)
        
    // }

    // mapStateToProps = (state) =>{ value }
    // Plus = e => {
    //     const number = this.state.num + 1
    //     this.setState({num:number})
    // }   

    // Minus = e => {
    //     const number = this.state.num - 1
    //     this.setState({num:number})
    // }

    render() {
        const { value,countUp ,countDown } = this.props
        return(
            
            <div className='wrap'>  
    
                <Button 
                    handleClick={countUp}
                    children='増'
                />
                <div id='display'>{value}</div>
                <Button 
                    handleClick={countDown}
                    children='減'
                />
                
            </div>
    
        )
    
    }

} 

export default connect(null,{ countUp,countDown })(Counter);