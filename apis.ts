import { json } from "stream/consumers";
import { ITask } from "./types/task";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks`, { cache: "no-store" });
  const todo = await res.json();
  return todo;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const editTodo = await res.json();
  return editTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseURL}/tasks/${id}`, {
    method: "DELETE",
  });
};
