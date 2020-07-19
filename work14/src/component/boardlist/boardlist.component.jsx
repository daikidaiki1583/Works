import React from 'react'
import './boardlist.styles.scss'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Boardlist extends React.Component {
    render(){
        const {board,deletePost} = this.props 
        return(
            <ul className='boardlist'>
            {
                board.length !== 0 ?
                board.map(board => {
                    return(
                    <li className='toboard' key={board.id}>
                        <Link     
                        to={`/board/${board.id}`} 
                        onClick={deletePost}
                        >
                        {board.title}
                        </Link>

                        <div className='time'>
                            最終更新
                            <div className='create-date'>
                                {board.serverTimeStamp.getFullYear()}/
                                {board.serverTimeStamp.getMonth()+1}/
                                {`${board.serverTimeStamp.getDate()}`}
                            </div>

                            <div className='create-time'>
                                {`${board.serverTimeStamp.getHours()}`}:
                                {board.serverTimeStamp.getMinutes().toString().length === 1 ?
                                `0${board.serverTimeStamp.getMinutes().toString()}`:
                                board.serverTimeStamp.getMinutes().toString()}   
                            </div>
                        </div>


                    </li>        
                
                    )
                })
                :
                <div>まだ掲示板がありません。</div>
            }
        </ul>

        )
    }

}

const mapStateToProps = state => ({
    board:state.display
})

export default connect(mapStateToProps)(Boardlist)
