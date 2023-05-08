"use client";

import { useState } from "react"

export default function FormTodo({ addTodo }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

    const todoCreate = (text: string) => {
    const todoObj = { text: text, id: id }
    setId(id + 1);
    addTodo(todoObj)
    setText("")
  }


  return (
    <div className="mt-4 flex justify-between">
      <input
        className="w-80 border-b-2 border-violet-700 text-violet-700 focus:outline-none placeholder:text-violet-300"
        type="text" placeholder="Tarefa" onChange={(e) => setText(e.target.value)} value={text}
      />
      <button
        className="ml-2 border-2 border-violet-700 p-2 text-violet-700 hover:text-white hover:bg-violet-700  rounded-lg flex" onClick={() => todoCreate(text)}
      >
        <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
        <span>Add</span>
      </button>
    </div>
  )
}