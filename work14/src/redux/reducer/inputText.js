export default function input(state='',action){
    switch (action.type) {
        case 'INPUT_TEXT':
            return action.payload
        case 'DELETE_TEXT':
            return action.payload
        default:
            return state
    }
}