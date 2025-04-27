"use client";

import { useState } from "react";
import { toDoList as initialToDos, ToDo } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function ToDoList() {
  const [todos, setTodos] = useState<ToDo[]>(initialToDos);

  const handleChange = (idx: number, value: string) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, text: value } : t))
    );
  };
  const handleToggle = (idx: number) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <Card className="bg-pink-50/60 border-dotted border-2 border-pink-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-pink-900 mb-2">To Do</h2>
        <ul className="space-y-2">
          {todos.map((todo, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(i)}
                className="accent-pink-500 w-4 h-4 rounded"
              />
              <input
                className="w-full rounded px-2 py-1 border border-pink-100 bg-pink-100/60 text-pink-900 placeholder:text-pink-400 focus:outline-pink-400"
                placeholder={`Task ${i + 1}`}
                value={todo.text}
                onChange={(e) => handleChange(i, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
