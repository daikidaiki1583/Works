import React from 'react'
import './displayImage.styles.scss'

import {connect} from 'react-redux'
import {displayImage,deleteImage} from '../../redux/action/index'
import {storage, firestore} from '../../firebase/firebase.utiles'


class DisplayImage extends React.Component {

    componentDidMount(){
        const {displayImage} = this.props
        
        const query = firestore.collection('image').orderBy('createdAt')
        query.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type !== 'added') {
                    return
                }
                const {imgURL,name,id} = change.doc.data()
                const obj = {
                    imgURL:imgURL,
                    name:name,
                    id:id
                }

                displayImage(obj)

            })
        })
    }

    componentWillUnmount(){
        const {deleteText,deleteImage} = this.props
        deleteImage()
    }

    render(){
        const {post} = this.props
        const image = post.map(post => {
            return(
                <div className='image-item' key={post.id}>
                    <div className='image' ><img src={post.imgURL} alt="投稿写真"/></div>
                    <p>{post.name}</p>
                </div>
            )
        })
        return(
                <div className='displayImage'>
                    {image}
                </div>
        )
    }
}

const mapStateToProps = state => ({
    text:state.input,
    post:state.displayImg
})

const mapDispatchToProps = dispatch => ({
    displayImage: obj => dispatch(displayImage(obj)),
    deleteImage: () => dispatch(deleteImage())

})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayImage)