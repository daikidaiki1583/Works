import React from 'react'
import './board.styles.scss'
import {connect} from 'react-redux'

import Textarea from '../../component/textarea/textarea.component'
import {inputText,deleteText} from '../../redux/action/index'

class Board extends React.Component {

    handleChange = async (e) => {
        const {inputText} = this.props
        const {value} = e.target
        await inputText(value)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {deleteText} = this.props
        deleteText()
    }
    
    render(){
        const {text} = this.props
        return(
            <div className='board'>
                <form onSubmit={this.handleSubmit}>
                    <Textarea
                        handleChange={this.handleChange}
                        value={text}
                        placeholder='投稿したい内容を入力してください'
                    />
                    <button>投稿</button>
                </form>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    text:state.input    
})

const mapDispatchToProps = dispatch => ({
        inputText: text => dispatch(inputText(text)),
        deleteText: () => dispatch(deleteText())
})

export default connect(mapStateToProps,mapDispatchToProps)(Board)