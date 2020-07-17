import React from 'react'
import './createBoard.styles.scss'

import {connect} from 'react-redux'
import {firestore} from '../../firebase/firebase.utiles'
import {inputText,deleteText,savePost} from '../../redux/action/index'
import Textarea from '../../component/textarea/textarea.component'

class CreateBoard extends React.Component {

    handleSubmit = async (e) => {
        e.preventDefault()
        const {deleteText,text} = this.props
        const num = await firestore.collection('boards').get()
        .then(snap => {
            return snap.size + 1
        })
        .catch(error => {
            return error
        })

        firestore.collection('boards').doc(`${num}`).set({
            board:`board${num}`,
            boardNum:num,
            title:text
        })


        deleteText()

        this.props.history.push(`/board/${num}`)
    }

    handleChange = (e) => {
        const {inputText} = this.props
        const {value} = e.target
        inputText(value)
    }

    render(){
        const {text} = this.props
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Textarea
                        value={text}
                        handleChange={this.handleChange}
                        placeholder='掲示板のタイトルを決めて下さい'
                    />
                    <button>作成</button>  
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
        deleteText: () => dispatch(deleteText()),
        savePost: (obj) => dispatch(savePost(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateBoard)
