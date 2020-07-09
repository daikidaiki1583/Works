import React from 'react'
import './board.styles.scss'

import { connect } from 'react-redux'
import Textarea from '../../component/textarea/textarea.component'
import { inputText } from '../../action/index'

class Board extends React.Component {

    handleChange = (e) => {
        const {inputText} = this.props
        const {value} = e.target
        inputText(value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {value} = this.props
        console.log(value)        
    }

    render(){
        const {value} = this.props
        return(
            <div className='board'>
                <form onSubmit={this.handleSubmit}>
                    <Textarea 
                        type='text'
                        handleChange={this.handleChange}
                        value={value}
                    />
                    <button type='submit'>送信</button>
                </form>

            </div>
        )
    }
}

export default connect(null,{inputText})(Board)