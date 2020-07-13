import { combineReducers } from 'redux'
import input from './reducer/inputText'
import save from './reducer/savePost'

export default combineReducers({
    input,
    save
})