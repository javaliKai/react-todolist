import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please input something first");
      return;
    }

    addTodo(value);
    alert(value);
    setValue("");
  };

  console.log("value", value);
  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.PropTypes = {
  addTodo: PropTypes.func.isRequired
};
export default TodoForm;
