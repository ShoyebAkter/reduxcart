export const ADD=(item)=>{
    return{
        type: "ADD_CART",
        payload:item
    }
}
export const DLT=(id)=>{
    return{
        type: "DLT_CART",
        payload:id
    }
}