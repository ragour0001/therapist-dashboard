"use client";

import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { TodoItem } from "../types/dashboard";
import { DashboardService } from "../services/dashboard";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoItems = await DashboardService.getTodoItems();
        setTodos(todoItems);
      } catch (error) {
        console.error("Error fetching todo items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  if (loading) {
    return (
      <div className="h-96 bg-purple-100 rounded-2xl animate-pulse">
        <div className="bg-white p-5 rounded-t-2xl">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="p-5 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-purple-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-96 bg-purple-100 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-white p-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">To-Do List</h3>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
            <Plus className="w-3 h-3 text-white" />
          </div>
          <span className="text-purple-600 font-medium text-base">Add New</span>
        </div>
      </div>

      {/* Todo Items */}
      <div className="p-5 space-y-0">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between py-5 px-0"
          >
            <span
              className={clsx(
                "text-base text-gray-900",
                todo.completed && "line-through text-gray-500",
              )}
            >
              {todo.title}
            </span>
            <button
              onClick={() => toggleTodo(todo.id)}
              className={clsx(
                "w-5 h-5 border-2 rounded",
                todo.completed
                  ? "bg-purple-600 border-purple-600"
                  : "bg-white border-purple-100",
              )}
            >
              {todo.completed && (
                <svg
                  className="w-3 h-3 text-white mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
