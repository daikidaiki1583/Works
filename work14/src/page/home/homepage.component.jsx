import React from 'react'
import './homepage.styles.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteBoard} from '../../redux/action/index'

class HomePage extends React.Component {

    componentWillUnmount(){
        const {deleteBoard} = this.props
        deleteBoard()
    }

    render(){
        return(
            <div className='home'>
                <div className='menu'>
                    <Link className='menu-item listen' to='/createboard'>
                        <div className='small'>柴犬のことを</div>
                        <div className='large'>聞いてみる</div>
                    </Link>
                    <Link className='menu-item watch' to='/'>
                        <div className='small'>柴犬のことを</div>
                        <div className='large'>見てみる</div>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    deleteBoard: () => dispatch(deleteBoard())
})

export default connect(null,mapDispatchToProps)(HomePage)