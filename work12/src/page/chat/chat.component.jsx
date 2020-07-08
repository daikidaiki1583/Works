import React from 'react'
import './chat.styles.scss'

// import Input from '../../component/input/input.component'
import Button from '../../component/button/button.component'
import {Link} from 'react-router-dom'
import {auth,firestore, serverTimeStamp} from '../../firebase/firebase.utils'

class Chat extends React.Component {
    constructor(){
    super()

        this.state={
            text:'',
            displayName:'',
            uid:'',
            message:[],
        }
    }

    loadText =  () =>{
        
        const query = firestore.collection('text').orderBy('serverTimeStamp','asc')
        query.onSnapshot(async snapshot => {
            const isSnapshot = snapshot.metadata.hasPendingWrites ? 'local' :'server' 
            if (isSnapshot === 'local'){
                return
            }
            snapshot.docChanges().forEach(async change => {
                if (change.type === 'removed'){
                    
                    const message =this.state.message
                    const newMessage = message.filter(word => word.text !== change.doc.data().text)
                    this.setState({message:newMessage})
                } else {
                    const {text,displayName,serverTimeStamp} = change.doc.data()

                    if(serverTimeStamp === null){
                        return
                    }

                    const message = this.state.message
                    const obj = { 
                        text:text,
                        displayName:displayName,
                        serverTimeStamp:serverTimeStamp.toDate(),
                        id:change.doc.id,
                        index:change.newIndex + 1
                    }
                    message.unshift(obj)
                    await this.setState(()=>({
                        message:message
                    }))
                } 
            })
        })

    }
 
    componentDidMount(){

        auth.onAuthStateChanged(async (user)  =>{
            if(!user){
                alert('ログアウトしました。')
                this.props.history.push('/')
            } else{ 
                const {uid,displayName} = user
                this.setState({displayName:displayName,uid:uid})     
            }
        })

        //最初のテキスト読み込み
        this.loadText()

    }

    signOut=()=>{
        auth.signOut()
    }

    handleChange = (e) => {
        const {value} =e.target
        this.setState({text:value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        if (!this.state.text) {
            alert('文字を入力してください')
            return
        }
        await firestore.collection('text').add({
            displayName:this.state.displayName,
            uid:this.state.uid,
            text:this.state.text,        
            serverTimeStamp:serverTimeStamp()
        })

        this.setState({text:''})
    }

    render(){

        const convesation= this.state.message.map((message) => {      
            return(
                <div className='message' key={message.id} >
                    <div className='index'>{message.index}</div>
                    <div className='context'>
                        <div className='text'>{message.text}</div>
                        <div className='contributor'>投稿者：{message.displayName}</div>
                        <div className='time'>投稿日：
                            {message.serverTimeStamp.getFullYear()}/
                            {message.serverTimeStamp.getMonth() + 1}/
                            {message.serverTimeStamp.getDate()}
                            {` ${message.serverTimeStamp.getHours()}:${message.serverTimeStamp.getMinutes()}`}
                        </div>
                    </div>
                </div>
            )
        })
        return(

            <div className='chat'>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        type='text'
                        name='text'
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder='テキストを入力してください'
                    />
                    <Button
                        children='送信'
                    /> 
                    <Link className='signout' to='/' onClick={this.signOut}>サインアウト</Link>
                </form>

                <div className='convesation-area'>
                    {convesation}
                    <div className='page-button'>
                        {
                            this.state.page !== 1?
                            <Button
                                handleClick={this.handleClick}
                                name='prev'
                                children='前へ'
                            />
                            :<div></div>
                        }
                        {
                            this.state.page !== this.state.lastPage?
                            <Button
                                handleClick={this.handleClick}
                                name='next'
                                children='次へ'
                            />
                            :<div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Chat