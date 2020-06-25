import React from 'react'
import Input from '../input/input.component'
import {auth} from '../../firebase/firebase.utils'


class Login extends React.Component{
    constructor(props){
        super(props)

        props=this.props
        this.state={
            email:'',
            password:''
      
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const {email,password} = this.state
        auth.signInWithEmailAndPassword(email,password)
        .then( result => {
            console.log(result)
            this.props.history.push('/home')
        })
        .catch(error => {
            console.log(error)
        })

        console.log(email)
        console.log(password)
    }

    handleChange =(e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }   

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>ユーザー登録がお済の方はこちら</label>
                <Input
                    type='email'
                    name='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    placeholder='メールアドレス'
                />
                <Input
                    type='password'
                    name='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    placeholder='パスワード'
                />
                <button type='submit'>ログイン</button>
            </form> 
        )
    }

}

export default Login