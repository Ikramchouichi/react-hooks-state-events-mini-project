import React from "react";

function Task({ task, onRemove }) {
  const { id, text, category } = task;

  const handleDeleteClick = () => {
    // Call the onRemove function with the task's id to remove that specific task
    onRemove(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
