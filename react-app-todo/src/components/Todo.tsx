import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props {
  todo: TodoType;
}
const TodoStyle = {};
const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
      <div>
        <button>{todo.completed ? "completed" : "Incompleted"}</button>
      </div>
    </div>
  );
};

export default Todo;
