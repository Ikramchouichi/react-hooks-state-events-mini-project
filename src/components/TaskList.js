// TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemove }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TaskList;
