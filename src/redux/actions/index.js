export const addMess = (message) => {
    return  {
        type: "ADDITEM",
        payload : message
    }
    
}
export const delItem = (message) => {
    return {
        type: "DELITEM",
        payload : message
    }
   
}
