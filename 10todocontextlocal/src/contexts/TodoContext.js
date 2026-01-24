import { createContext, useContext } from "react";


export const TodoContext = createContext({
   
    todos: [
            {

                id: 1,
                todo: "Learn React",
                completed: false
            },
            
    ],
       addTodo: (todo) => {},
       updateTodo: (id, todo) => {},
       deleteTodo: (id) => {},
       toggleTodo: (id) => {}
});
// we  will create a local hook to use the context
export const useTodo = () => {
    const context = useContext(TodoContext);
    return context;
}

// we will create a provider to pass the context to the children
export const TodoProvider = TodoContext.Provider;