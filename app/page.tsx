import React from "react";
import Post from "./posts/Post";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
import { getAllTodos } from "@/apis";
import { ITask } from "@/types/task";

const page = async() => {
  const tasks : ITask[] = await getAllTodos();
  console.log(tasks);
  

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="flex flex-col text-center my-5 gap-4">
        <h1 className="text-2xl font-bold mt-2">To Do List</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
};

export default page;
