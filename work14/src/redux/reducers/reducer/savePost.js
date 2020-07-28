export default function save(state=[],action) {
    switch (action.type) {
        case 'SAVE_POST':
            return [
            ...state,
             {
                 post:action.payload.post,
                 serverTimeStamp:action.payload.serverTimeStamp,
                 id:action.payload.id
             }   
            ] 
        case 'DELETE_POST':
            return state.filter(state => state.length === 0)
        default :
            return state 
    }
}