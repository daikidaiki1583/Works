export default function display(state=[],action){
    switch (action.type) {
        case 'DISPLAY_BOARD':
            return state.concat(action.payload)
        case 'DELETE_BOARD':
            return state.filter(state => state.title.length === 0 )
        default :
            return state
    }
}