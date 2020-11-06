import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React aku nih!"
    },
    {
      text: "Belajar komputer aku nih!"
    },
    {
      text: "Belajar Hook aku nih!"
    },
    {
      text: "Belajar JSX aku nih!"
    },
    {
      text: "Belajar aja aku nih!"
    },
    {
      text: "Belajar lagi aku nih!"
    },
    {
      text: "Belajar biar pinter aku nih!"
    },
    {
      text: "Belajar React aku nih!"
    },
    {
      text: "Belajar React aku nih!"
    },
    {
      text: "Belajar React aku nih!"
    }
  ];
  return (
    <section className="todos">
      {/* using jsx text attribute and array map  */}
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
