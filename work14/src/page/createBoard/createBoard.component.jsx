import React from 'react'
import './createBoard.styles.scss'

import {connect} from 'react-redux'
import Boardlist from '../../component/boardlist/boardlist.component'
import {firestore,serverTimeStamp} from '../../firebase/firebase.utiles'
import {inputText,deleteText,displayBoard,deletePost} from '../../redux/action/index'
import Textarea from '../../component/textarea/textarea.component'

class CreateBoard extends React.Component {

    handleSubmit = async (e) => {
        e.preventDefault()
        const {deleteText,text} = this.props
        if (text === ''){
            alert('文章を入れて下さい')
            return
        }

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
            title:text,
            serverTimeStamp:serverTimeStamp()
        })

        deleteText()

        this.props.history.push(`/board/${num}`)
    }

    handleChange = (e) => {
        const {inputText} = this.props
        const {value} = e.target
        inputText(value)
    }

    componentDidMount(){
        const query = firestore.collection('boards')

        // query.onSnapshot(snapshot => {
        query.orderBy('serverTimeStamp','desc').get()
        .then(snapshot => {
            snapshot.docChanges().forEach(change => {
                const {title,boardNum,serverTimeStamp} = change.doc.data()
                // if(serverTimeStamp === null){
                //     return
                // }

                const obj = {
                    title:title,
                    serverTimeStamp:serverTimeStamp.toDate(),
                    id:boardNum
                }   
                
                const {displayBoard} = this.props
                displayBoard(obj)
            })
        })

    }

    render(){
        const {text} = this.props 
        return(
            <div className='createboard'>
                <h1>掲示板作成</h1>
                <form onSubmit={this.handleSubmit}>
                    <Textarea
                        value={text}
                        handleChange={this.handleChange}
                        placeholder='掲示板のタイトルを決めて下さい'
                    />
                    <button>作成</button>  
                </form>

                <h1>掲示板一覧</h1>
                <Boardlist/>
            </div>
        )
    }
} 

const mapStateToProps = state => ({
    text:state.input,
    board:state.display
})

const mapDispatchToProps = dispatch => ({
        inputText: text => dispatch(inputText(text)),
        deleteText: () => dispatch(deleteText()),
        deletePost:() => dispatch(deletePost()),
        displayBoard: (obj) => dispatch(displayBoard(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateBoard)
