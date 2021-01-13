import React from "react";
import Task from "./Task";

function TaskList({taskList, deleteTask}) {
  //console.log(taskList);

  const tasksMapped = taskList.map((task) => (
    <Task text={task.text} category={task.category}
    key={task.text}
    deleteTask={deleteTask}
    />

  ))

  return (
    <div className="tasks">
      {tasksMapped}
    </div>
  );
}

export default TaskList;
