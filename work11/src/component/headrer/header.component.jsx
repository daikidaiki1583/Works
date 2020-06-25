import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state={
            displayName:'',
            photoURL:'',
            logIn:''
        }
    }
    
    componentDidMount(){

        auth.onAuthStateChanged(user =>{
            
            if(user){
                const {displayName,photoURL} = user
                this.setState({displayName:displayName,photoURL:photoURL,logIn:true})

            } else {
                this.setState({displayName:'',photoURL:'',logIn:false})
            }   

        })

    }

    signOut = () => {
        auth.signOut()
    }

    render(){
    
        return(
            <header>

                <div className='wrap-profile'>
                    <div className='profile'>
                        {this.state.displayName?<div>{this.state.displayName}さん</div>:''}
                        {this.state.photoURL?<div className='profile-image'><img src={this.state.photoURL} alt=""/></div>:''}   
                    </div>
                    {this.state.logIn?<Link to='/' className='sign-in-out' onClick={this.signOut}>サインアウト</Link>:<div></div>}
                </div>

            </header>
        )
    }

}

export default Header