import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }

  const filteredTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categoryList={CATEGORIES}
      selectedCategory={category}
      onSelectCategory={setCategory}
      />
      <NewTaskForm 
      categoryList={CATEGORIES.filter((cat) => cat !== "All")}
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList taskList={filteredTasks} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
