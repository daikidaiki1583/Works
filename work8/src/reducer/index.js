const initialState={
    num:0
}

export default function counters (state=initialState.num,action){
    switch (action.type) {
        case 'COUNT_UP':
            return state + 1
 
        case 'COUNT_DOWN':
            return state - 1
        default:
            return state

    }
} 