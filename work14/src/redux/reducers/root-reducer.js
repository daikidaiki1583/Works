import { combineReducers } from 'redux'
import input from './reducer/inputText'
import save from './reducer/savePost'
import display from './reducer/displayBoard'
import title from './reducer/getTitle'

export default combineReducers({
    input,
    save,
    display,
    title
})