import React from 'react'

import SignIn from '../../component/signin/signin.component'
import Login from '../../component/login/login.component'

class Auth extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <SignIn {...this.props}/>
                <Login {...this.props}/>
            </div>
    
        )
    }


}

export default Auth