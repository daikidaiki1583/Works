export default function save(state=[],action) {
    switch (action.type) {
        case 'SAVE_POST':
            return state.concat(action.payload)
        default :
            return state 
    }
}