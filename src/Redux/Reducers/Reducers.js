import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Action/Actions-Type"

const initialState=[]
export default (state=initialState, action)=>{

    switch(action.type){
        case ADD_TODO:
            return[...state, action.payload]
        case DELETE_TODO:
            const newState= state.filter((todo)=>todo.id !==action.payload)
            return newState
        case UPDATE_TODO:
           const updatedState= state.map(todo=>{
                if(todo.id==action.payload.todoId){
                    todo.title=action.payload.todo.title
                    todo.discription=action.payload.todo.discription
                }
                return todo;
            }) 
            return updatedState
        default:
            return state
    }

    //if(action.type ===ADD_TODO){
    //}else if(action.type === DELETE_TODO){
    //}else if(action.type ===UPDATE_TODO){
    //}else{
    //}
}