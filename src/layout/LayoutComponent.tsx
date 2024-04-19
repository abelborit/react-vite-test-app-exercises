import { TodoComponent } from "../components/TodoComponent";

const todosInfo = [
  { id: 1, name: "Tarea 01", completed: false },
  { id: 2, name: "Tarea 02", completed: true },
  { id: 3, name: "Tarea 03", completed: true },
  { id: 4, name: "Tarea 03", completed: false },
];

export const LayoutComponent = () => {
  return (
    <>
      {todosInfo.map((todoElement) => (
        <TodoComponent todo={todoElement} key={todoElement.id} />
      ))}
    </>
  );
};
