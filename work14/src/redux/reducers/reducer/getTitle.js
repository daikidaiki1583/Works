export default function title (state='',action){
    switch (action.type){
        case 'GET_TITLE':
            return action.payload
        case 'DELETE_TITLE':
            return action.payload
        default:
            return state
    }
}