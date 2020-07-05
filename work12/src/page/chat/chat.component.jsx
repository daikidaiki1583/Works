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
            lastVisible:'',
            firstVisible:undefined,
            displayedResults:30,
            page:1,
            lastPage:''
        }
    }

    loadText =  () =>{

        const query = firestore.collection('text').orderBy('serverTimeStamp','desc')

        query.limit(this.state.displayedResults).onSnapshot(async snapshot => {
            
            snapshot.docChanges().forEach(change => {
                
                // if (change.type === 'removed'){

                // } else {
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
                    this.setState(()=>({
                        message:message.concat(obj)
                    }))
                // } 
            })
        })

    }
    

 
    componentDidMount(){

        auth.onAuthStateChanged(async (user)  =>{
            if(!user){
                alert('ログインしてください')
                this.props.history.push('/')
            } else{ 
                const {uid,displayName} = user
                this.setState({displayName:displayName,uid:uid})     
            }
        })

        //最初のテキスト読み込み
        this.loadText()

        const query = firestore.collection('text').orderBy('serverTimeStamp','desc')        
        // query.limit(this.state.displayedResults).onSnapshot(snapshot => {
        //     this.setState({lastVisible:snapshot.docs[snapshot.docs.length-1]})
        // })

        query.onSnapshot(snapshot => {
            this.setState({lastPage:Math.ceil(snapshot.docs.length/this.state.displayedResults)})
            this.setState({lastVisible:snapshot.docs[this.state.displayedResults-1]})
        })


    }

    signOut=()=>{
        auth.signOut()
    }

    handleClick =  async (e) => {

        const {name} = e.target
        let query
        if (name === 'next') {
            query = firestore.collection('text').orderBy('serverTimeStamp','desc').startAfter(this.state.lastVisible)

            firestore.collection('text').orderBy('serverTimeStamp','desc')
            .endAt(this.state.lastVisible)
            .get().then(snapshot =>{
                this.setState({firstVisible:snapshot.docs[snapshot.docs.length - this.state.displayedResults]})
            })

            query.limit(this.state.displayedResults).get().then(async snapshot=>{
                this.setState({lastVisible:snapshot.docs[snapshot.docs.length-1]})
            })

            const page =this.state.page + 1
            this.setState({page:page})
            
        } else{
            query = firestore.collection('text').orderBy('serverTimeStamp','desc').startAt(this.state.firstVisible)  

            firestore.collection('text').orderBy('serverTimeStamp','desc')
            .endBefore(this.state.firstVisible)
            .get().then(snapshot =>{
                this.setState({firstVisible:snapshot.docs[snapshot.docs.length-this.state.displayedResults]})
            })

            query.limit(this.state.displayedResults).get().then(snapshot=>{
                this.setState({lastVisible:snapshot.docs[snapshot.docs.length-1]})
            })

            const page =this.state.page - 1
            this.setState({page:page})

        }
        
        const message =this.state.message
        const nextMessage = message.filter(word => word.length === -1)
        this.setState({message:nextMessage})

        query.limit(this.state.displayedResults).get().then(async snapshot=>{

            snapshot.docChanges().forEach(async change =>{

                const {text,displayName,serverTimeStamp} = change.doc.data()
                const obj ={
                    text:text,
                    displayName:displayName,
                    serverTimeStamp:serverTimeStamp.toDate(),
                    id:change.doc.id,
                    index:change.newIndex + 1
                }
                const message = this.state.message.concat(obj)
                this.setState({message:message})
                
            })
        
        })
        .catch(error => console.log(error))

    }

    handleChange = (e) => {
        const {value} =e.target
        this.setState({text:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        firestore.collection('text').add({
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