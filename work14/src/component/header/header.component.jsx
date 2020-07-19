import React from 'react'
import './header.styles.scss'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends React.Component {

    render(){
        return(
            <header>
                <Link to='/'>
                    shibable
                </Link>
            </header>
        )
    }
}

export default Header