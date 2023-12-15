import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((prevTodo) => prevTodo.id != id)
    );
  };
  const toggleCompeleted = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, compeleted: !prevTodo.compeleted } : prevTodo
      )
    )
  };
  useEffect(()=>{
     const todo= JSON.parse(localStorage.getItem("todos"))
     if(todo && todo.length > 0){
      setTodos(todo)
     }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{ addTodo, todos, deleteTodo, updateTodo,toggleCompeleted }}>
      <TodoForm />
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-center">
          <TodoItem todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
