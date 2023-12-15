import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos: [
        {
            id: 1,
            todo: "todo title",
            completed: true
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleCompeleted: (id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider;