export const inputText = (text) => ({type:'INPUT_TEXT',payload:text})
export const deleteText = () => ({type:'DELETE_TEXT',payload:''})

export const savePost = (obj) => ({type:'SAVE_POST',payload:obj})