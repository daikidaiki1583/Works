import { combineReducers } from 'redux'
import input from './reducer/inputText'
import save from './reducer/savePost'
import display from './reducer/displayBoard'
import title from './reducer/getTitle'
import displayImg from './reducer/displayImage'

export default combineReducers({
    input,
    save,
    display,
    title,
    displayImg
})