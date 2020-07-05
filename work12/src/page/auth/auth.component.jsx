import React from 'react'
import './auth.styles.scss'

import Input from '../../component/input/input.component'
import {auth,firestore} from '../../firebase/firebase.utils'

class Auth extends React.Component{
    constructor(){
        super()

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
            loginEmail:'',
            loginPassword:''
        }
    }

    handleSubmit = async (e) =>{
        e.preventDefault()

        //formのnameによってswitch文で条件分岐するために代入
        const {name} = e.target

        const {displayName,email,password,confirmPassword}=this.state

        switch (name){

            case 'register':

                if (password !== confirmPassword){
                    alert('パスワードが一致しません') 
                    this.setState({password:'',confirmPassword:''})
                    return
                }  

                await auth.createUserWithEmailAndPassword(email,password)
                .then(result=>{ 
                    
                    auth.currentUser.updateProfile({
                        displayName:displayName,
                        uid:result.user.uid
                    })
            
                    this.props.history.push('/chat')

                })
                .catch(error =>{
                    console.log(error)
                    alert('登録できませんでした。もう一度入力してください。')
                    
                })        

                break

            case 'login':    

                await auth.signInWithEmailAndPassword(this.state.loginEmail,this.state.loginPassword)
                .then(result =>{
                    this.props.history.push('/chat')
                })
                .catch(error =>{
                    console.log(error)
                    alert('ログインできません。再度メールアドレスとパスワードが正しいかご確認下さい。')
                })

                break      

            default:
        }


    }

    handleChange =(e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }


    render(){
        return(
            <div className='register-login-form'>
                <form name='register' onSubmit={this.handleSubmit}>
                    <h1>新規登録</h1>
                    <Input
                        type='text'
                        name='displayName'
                        handleChange={this.handleChange}
                        value={this.state.displayName}
                        placeholder='ユーザー名'
                        required
                    />
                    <Input
                        type='email'
                        name='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        placeholder='メールアドレス'
                        required
                    />
                    <Input
                        type='password'
                        name='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        placeholder='パスワード'
                        required
                    />
                    <Input
                        type='password'
                        name='confirmPassword'
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword}
                        placeholder='パスワード(確認用)'
                        required
                    />
                    <button>登録</button>    
                </form>

                <form name='login' onSubmit={this.handleSubmit}>
                    <h1>ログイン</h1>
                    <Input
                        type='email'
                        name='loginEmail'
                        handleChange={this.handleChange}
                        value={this.state.loginEmail}
                        placeholder='メールアドレス'
                        required
                    />
                    <Input
                        type='password'
                        name='loginPassword'
                        handleChange={this.handleChange}
                        value={this.state.loginPassword}
                        placeholder='パスワード'
                        required
                    />
                    <button>ログイン</button>    
                </form>
            </div>
        )
    }
}

export default Auth