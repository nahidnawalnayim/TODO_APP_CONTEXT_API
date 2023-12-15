import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [todoeditable, setTodoeditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleCompeleted } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todomsg });
    setTodoeditable(false);
  };
  const toggleComplete = () => {
    
    toggleCompeleted(todo.id);
  };
  return (
    
      <div className={`w-96 m-3 h-16 bg-slate-200 rounded-lg flex pl-2 ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#e5e6ed]"}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />    
        <input
          type="text"
          value={todomsg}
          onChange={(e) => setTodomsg(e.target.value)}
           className={`border outline-none w-full bg-transparent rounded-lg ${
            todoeditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`} readOnly={!todoeditable}
        />
        <div className="flex flex-row m-auto mr-4 justify-end">
        <button
          onClick={() => {
            if (todo.completed) return;
            if (todoeditable) {
              editTodo();
            } else {
              setTodoeditable((prev) => !prev);
            }
          }}
        >
          {todoeditable ? "📂" : "✏️"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>

        </div>
      </div>
   
  );
};

export default TodoItem;
