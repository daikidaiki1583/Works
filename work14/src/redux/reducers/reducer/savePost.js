export default function save(state=[],action) {
    switch (action.type) {
        case 'SAVE_POST':
            return state.concat(action.payload)
        case 'DELETE_POST':
            return state.filter(state => state.post.length === 0)
        default :
            return state 
    }
}