import { useState } from "react";

interface TodoComponentProps {
  todo: {
    id: number;
    name: string;
    completed: boolean;
  };
}

export const TodoComponent = ({ todo }: TodoComponentProps) => {
  const [todoData, setTodoData] = useState(todo || {});

  const handleToggleCheckbox = () => {
    setTodoData({
      ...todoData,
      completed: !todoData.completed,
    });
  };

  return (
    <div data-testid="todo-testid-component">
      <br />
      <hr />

      <h3 data-testid="todo-testid-title">This is a TodoComponent</h3>
      <p data-testid="todo-testid-text">This is a simple text</p>

      <div data-testid={`todo-testid-card-${todoData.id}`}>
        <label data-testid={`todo-testid-label-${todoData.id}`}>
          <input
            data-testid={`todo-testid-checkbox-${todoData.id}`}
            type="checkbox"
            checked={todoData.completed}
            onChange={handleToggleCheckbox}
            name={todoData.name}
            id={todoData.id.toString()}
          />
          {todoData.id}. {todoData.name} - {todoData.completed ? "✅" : "❌"}
        </label>
      </div>

      <hr />
      <br />
    </div>
  );
};
