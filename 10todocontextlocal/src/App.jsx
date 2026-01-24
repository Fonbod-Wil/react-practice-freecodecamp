import { TodoProvider } from './contexts'
import { useState, useEffect } from 'react'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos)
      } catch {
        return []
      }
    }
    return []
  })

  const addTodo = (todos) => {
    setTodos((prev) => [{id: Date.now(), ...todos}, ...prev])
  }

   const updateTodo = (id, todos) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id
       === id ? todos : prevTodo)))
  }
   
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((Todo) => Todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((Todo) => Todo.id === id ? {...Todo, completed: !Todo.completed} : Todo))
  }
    
       

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
