// NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: categories[0] });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
