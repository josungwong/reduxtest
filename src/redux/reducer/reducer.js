let initialState = {
    number: 0,
    id:"",
    password:""
}




function reducer(state=initialState,action){
    console.log("이게맞나?",action)
    if(action.type === "INCREMENT"){
        return {...state,number:state.number+action.payload.Num }
    }
    switch(action.type){

        case "LOGIN":
            return {
                ...state,
                id:action.payload.id,
                password:action.payload.password
            }
        case "DECREMENT":
            return {...state,number:state.number-action.payload.Num}
        default:
            return {...state}
    }
} 



export default reducer