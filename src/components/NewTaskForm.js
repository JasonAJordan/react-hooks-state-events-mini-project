import React, { useState } from "react";


function NewTaskForm({categoryList, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code")


  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({ text, category })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" 
        onChange={(event) =>setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(event)=> setCategory(event.target.value)}>
          {categoryList.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
