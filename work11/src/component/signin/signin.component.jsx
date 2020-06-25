import React from 'react'
import './signin.styles.scss'
import Input from '../input/input.component'
import {auth,provider} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            loginEmail:'',
            loginPassword:''
      
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {email,password} = this.state
        auth.createUserWithEmailAndPassword(email,password)
        .then(result =>{
            this.props.history.push('/home')
        })
        .catch(function (error){
            console.log(error)
        })

        console.log(email)
        console.log(password)
    }

    handleChange =(e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }   

    googleSignIn = () => {
        auth.signInWithPopup(provider)
                                 .then(result => {
                                        console.log(result)
                                        this.props.history.push('/home')
                                　})
                                .catch(error =>{
                                    console.log(error)
                                })
    }

    render(){
        return(
            <div>

                <form name='register' onSubmit={this.handleSubmit}> 
                    <label>初めてご利用の方はユーザー登録してください</label>
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
                    <button type='submit'>ユーザー登録</button>

                    <label>Googleでサインインする場合はこちらをクリックしてください</label>
                    <button onClick={this.googleSignIn}>Googleでサインイン</button>

                </form>


            </div>






 
        )
    }

}

export default SignIn