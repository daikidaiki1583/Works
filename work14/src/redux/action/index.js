export const inputText = (text) => ({type:'INPUT_TEXT',payload:text})
export const deleteText = () => ({type:'DELETE_TEXT',payload:''})

export const savePost = (obj) => ({type:'SAVE_POST',payload:obj})
export const deletePost = () => ({type:'DELETE_POST'})

export const displayBoard = (obj) => ({type:'DISPLAY_BOARD',payload:obj})
export const deleteBoard = () => ({type:'DELETE_BOARD'})

export const getTitle = (title) => ({type:'GET_TITLE',payload:title}) 
export const deleteTitle = () => ({type:'DELETE_TITLE',payload:''})

export const displayImage = (obj) => ({type:'DISPLAY_IMAGE',payload:obj})
export const deleteImage = (obj) => ({type:'DELETE_IMAGE',payload:obj})