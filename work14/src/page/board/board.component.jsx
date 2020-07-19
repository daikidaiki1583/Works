import React from 'react'
import './board.styles.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Textarea from '../../component/textarea/textarea.component'
import {inputText,deleteText,savePost,deletePost,deleteBoard,getTitle,deleteTitle} from '../../redux/action/index'
import { firestore,serverTimeStamp } from '../../firebase/firebase.utiles'

class Board extends React.Component {

    handleChange = async (e) => {
        const {inputText} = this.props
        const {value} = e.target
        await inputText(value)
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        const {deleteText,text,match} = this.props
         
        if (text === ''){
            alert('テキストを入力してください')
            return
        }
        deleteText()
        
        firestore.collection('boards').doc(`${match.params.number}`).collection('post').add({
            post:text,
            serverTimeStamp:serverTimeStamp()
        })
        .then(result =>{

            firestore.collection('boards').doc(`${match.params.number}`).update({
                serverTimeStamp:serverTimeStamp()
            })
            .then(result => {
                console.log(result)
            })

        })
        .catch(error =>{
            console.log(error)
        })

    }
    
    componentDidMount(){
        const {savePost,match} = this.props
        const query =firestore.collection('boards').doc(`${match.params.number}`).collection('post')
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

        this.loadTitle()
    
    }
    
    componentWillUnmount(){
        const {deleteTitle,deletePost} = this.props
        deletePost()
        deleteTitle()
    }

    loadTitle = async () => {
        const {getTitle} = this.props
        const query =firestore.collection('boards').doc(`${this.props.match.params.number}`)
        const {title} = await query.get().then(doc =>doc.data()).catch(error => error)
        getTitle(title)
    }

    render(){
        const {text,post,deleteBoard,title} = this.props
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
                <Link to='/createboard' onClick={deleteBoard}>戻る</Link>
                <h1>
                    {title}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <Textarea
                        handleChange={this.handleChange}
                        value={text}
                        placeholder='投稿したい内容を入力してください'
                    />
                    <button>投稿</button>
                </form>
                <h1>投稿一覧</h1>
                <div className='displaypost'>
                    {
                    postArea.length === 0 ?
                    <div>この掲示板にはまだ投稿がありません。</div> :
                    postArea.reverse()}
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    text:state.input,
    post:state.save,
    title:state.title,    
})

const mapDispatchToProps = dispatch => ({
        inputText: text => dispatch(inputText(text)),
        deleteText: () => dispatch(deleteText()),
        savePost: obj => dispatch(savePost(obj)),
        deleteBoard: () => dispatch(deleteBoard()),
        deletePost: () => dispatch(deletePost()),
        getTitle: title => dispatch(getTitle(title)),
        deleteTitle: () => dispatch(deleteTitle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Board)