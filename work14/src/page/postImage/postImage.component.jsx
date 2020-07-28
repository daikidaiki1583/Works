import React from 'react'
import './postImage.styles.scss'

import {connect} from 'react-redux'
import SetFile from '../../component/setfile/setfile.component'
import Textarea from '../../component/textarea/textarea.component'
import {inputText,deleteText,savePost,deletePost} from '../../redux/action/index'
import {storage, firestore,serverTimeStamp} from '../../firebase/firebase.utiles'

class PostImage extends React.Component {
    constructor(){
        super()
        this.ref = React.createRef()
        this.storageRef = storage.ref()
    }


    handleChange = async (e) => {
        const {inputText} = this.props
        const {value} = e.target
        await inputText(value)
    }

    handleSubmit = async (e) => {
        e.preventDefault()  
        const {deleteText} = this.props
        let id
        await firestore.collection('image').add({
            createdAt:serverTimeStamp(),
            updateAt:serverTimeStamp(),
            name:this.props.text,
        })
        .then(async docRef => {
            deleteText()
            await firestore.collection('image').doc(docRef.id).update({
                id:docRef.id
            })
            id = docRef.id
        })
        .catch(error => {
            console.log(error)
        })

        const file = new File(this.ref.current.files,'.png',{type:'image/png'})
        await this.storageRef.child(`image/${id}`).put(file)
        .then(snapshot =>{
            console.log(snapshot)
        })
        .catch(error => {
            console.log(error)
        })

        await this.storageRef.child(`image/${id}`).getDownloadURL().then(url => {

            firestore.collection('image').doc(id).update({
                imgURL:url
            })

        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        return(
            <div className='postimage'>
                
                <form onSubmit={this.handleSubmit}>
                    <Textarea
                        handleChange={this.handleChange}
                        value={this.props.text}
                        placeholder='画像の説明を書いてください'
                    />
                    <SetFile ref={this.ref}/>
                    <button>投稿</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text:state.input
})

const mapDispatchToProps = dispatch => ({
    inputText: text => dispatch(inputText(text)),
    deleteText: () => dispatch(deleteText()),
    savePost: obj => dispatch(savePost(obj)),
    deletePost: () => dispatch(deletePost()),

})

export default connect(mapStateToProps,mapDispatchToProps)(PostImage)