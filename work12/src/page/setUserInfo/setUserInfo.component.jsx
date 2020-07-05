import React from 'react'
import './setUserInfo.styles.scss'

import Input from '../../component/input/input.component'
import { auth } from '../../firebase/firebase.utils'

class SetUserInfo extends React.Component{
    constructor(){
        super()

        this.state={
            userName:'',
            uid:''

        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            const uid = user.uid
            this.setState({uid:uid})            
        })
    }

    handleSubmit = (e) =>{
        const {userName,uid} = this.state
        auth.updateUser(this.state.uid,{
            displayName:userName,
            uid:uid
        })
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>ユーザ情報を登録してください</h1>
                <Input
                    type='text'
                    name='userName'
                    value={this.state.userName}
                    handleChange={this.handleChange}
                    
                    required
                />
            </form>
        )
    }
}

export default SetUserInfo