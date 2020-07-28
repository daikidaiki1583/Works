export default function displayImg(state=[],action){
    switch (action.type) {
        case 'DISPLAY_IMAGE':
            return [
                ...state,
                {
                    imgURL:action.payload.imgURL,
                    name:action.payload.name,
                    id:action.payload.id
                }
            ]
            case 'DELETE_IMAGE':
                return state.filter(state => state.length === 0) 
        default :
            return state
    }
}