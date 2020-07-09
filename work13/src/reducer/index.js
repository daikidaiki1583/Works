

export default function inputText (state='',action){
    switch (action.type) {
        case 'INPUT_TEXT':
            return action.text
        default:
            return state
    }
}