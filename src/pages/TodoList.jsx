import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning by doing" },
    { text: "Learning again and again" },
    { text: "Keep leraning bro!" }
  ]);
  return (
    // the whole code is imported from its own component File. this is the
    // main concept of react library, to maintain files more effectively
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
