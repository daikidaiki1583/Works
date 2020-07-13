import React from 'react'
import './board.styles.scss'
import {connect} from 'react-redux'

import Textarea from '../../component/textarea/textarea.component'
import {inputText,deleteText,savePost} from '../../redux/action/index'
import { firestore,serverTimeStamp } from '../../firebase/firebase.utiles'

class Board extends React.Component {

    handleChange = async (e) => {
        const {inputText} = this.props
        const {value} = e.target
        await inputText(value)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {deleteText,text} = this.props

        firestore.collection('text').add({
            post:text,
            serverTimeStamp:serverTimeStamp()
        })
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })

        deleteText()
    }
    
    componentDidMount(){
        const {savePost} = this.props
        const query =firestore.collection('text')
        query.orderBy('serverTimeStamp').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                const {post,serverTimeStamp} = change.doc.data()
                if(serverTimeStamp === null){
                    return
                }

                const obj = {
                    post:post,
                    serverTimeStamp:serverTimeStamp.toDate(),
                    id:change.doc.id
                }

                savePost(obj)
            })
        })
    
    }
    
    render(){
        const {text,post} = this.props
        const postArea = post.map(post => {
            return(
                <div className='post' key={post.id}>
                    {post.post}
                    <div className='time'>
                        <div className='post-date'>
                            {post.serverTimeStamp.getFullYear()}/
                            {post.serverTimeStamp.getMonth()+1}/
                            {`${post.serverTimeStamp.getDate()}`}
                        </div>

                        <div className='post-time'>
                            {`${post.serverTimeStamp.getHours()}`}:
                            {post.serverTimeStamp.getMinutes().toString().length === 1 ?
                            `0${post.serverTimeStamp.getMinutes().toString()}`:
                            post.serverTimeStamp.getMinutes().toString()}   
                        </div>
                    </div>

                </div>

            ) 
        })
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
                <div className='displaypost'>
                    {postArea.reverse()}
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    text:state.input,
    post:state.save    
})

const mapDispatchToProps = dispatch => ({
        inputText: text => dispatch(inputText(text)),
        deleteText: () => dispatch(deleteText()),
        savePost: (obj) => dispatch(savePost(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(Board)