"use client";
import FormTodo from "@/components/FormTodo";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

interface todo {
  id: number,
  text: string
}

interface addTodo {
  todo: todo;
}

export default function TodoListApp() {
  const [todos, setTodos] = useState([]);

  const addTodo: addTodo = (todo: todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) =>{
    const todoFilter = todos.filter((todo)=> todo.id !== id )
    setTodos(todoFilter);
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-violet-800">ToDo App</h1>
      <FormTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}