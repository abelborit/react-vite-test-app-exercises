/* test de prueba para corroborar que las instalaciones y configuraciones están correctamente realizadas */
// describe("Flash Test", () => {
//   test("flash test", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

/* NOTA: si no se coloca "import React from "react";" aparecerá un mensaje de error "React refers to a UMD global, but the current file is a module. Consider adding an import instead." que indica que se está utilizando una sintaxis que intenta acceder a la biblioteca React como un objeto global (UMD global), pero el archivo de prueba se está tratando como un módulo ES6. Al importar React, se le está diciendo a TypeScript y Jest que React es una dependencia del archivo de prueba y no necesita acceder a él como un objeto global.
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoComponent } from "../../src/components/TodoComponent";
import "@testing-library/jest-dom";

/* Importación ficticia para evitar la advertencia de TS6133 "error TS6133: 'React' is declared but its value is never read." */
const reactInfo = React;
console.log("React version:", reactInfo.version);

const mockTodo = { id: 1, name: "Tarea 01", completed: false };

// let todoComponentElement: HTMLElement;
let todoTitleElement: HTMLElement;
let todoTextElement: HTMLElement;
let todoCardElement: HTMLElement;
let todoCardElementLabel: HTMLElement | null;
let todoCardElementCheckbox: HTMLElement | null;

describe("Test <TodoComponent />", () => {
  beforeEach(() => {
    render(<TodoComponent todo={mockTodo} />);
  });

  beforeEach(() => {
    // todoComponentElement = screen.getByTestId("todo-testid-component");

    todoTitleElement = screen.getByTestId("todo-testid-title");
    todoTextElement = screen.getByTestId("todo-testid-text");

    todoCardElement = screen.getByTestId(`todo-testid-card-${mockTodo.id}`);
    todoCardElementLabel = todoCardElement.querySelector(
      `label[data-testid=todo-testid-label-${mockTodo.id}]`
    );

    todoCardElementCheckbox = todoCardElement.querySelector(
      `input[data-testid=todo-testid-checkbox-${mockTodo.id}]`
    );
    // console.log(todoCardElementCheckbox?.getAttributeNames());
  });

  it("should render TodoComponent", () => {
    // screen.debug();
    expect(todoTitleElement).toBeTruthy();
    expect(todoTitleElement.tagName).toBe("H3");
    expect(todoTitleElement.textContent).toBe("This is a TodoComponent");

    expect(todoTextElement).toBeTruthy();
    expect(todoTextElement.tagName).toBe("P");
    expect(todoTextElement.textContent).toBe("This is a simple text");

    expect(todoCardElement).toBeTruthy();
  });

  it("should render TodoComponent with correct initial state", () => {
    // screen.debug();
    expect(todoCardElementCheckbox?.getAttribute("id")).toBe(
      mockTodo.id.toString()
    );
    expect(todoCardElementCheckbox?.getAttribute("name")).toContain(
      mockTodo.name
    );
    expect(todoCardElementCheckbox).not.toBeChecked();

    expect(todoCardElementLabel?.textContent).toContain(
      mockTodo.completed ? "✅" : "❌"
    );
  });

  it("should toggle 'completed' to true or false when checkbox is clicked", () => {
    // screen.debug();
    fireEvent.click(todoCardElementCheckbox!);

    if (mockTodo.completed) {
      expect(todoCardElementCheckbox).not.toBeChecked();
      expect(todoCardElementLabel?.textContent).toContain("❌");
    } else {
      expect(todoCardElementCheckbox).toBeChecked();
      expect(todoCardElementLabel?.textContent).toContain("✅");
    }
  });

  it("should toggle 'completed' to initial state when checkbox is clicked twice", () => {
    // screen.debug();
    fireEvent.click(todoCardElementCheckbox!);
    fireEvent.click(todoCardElementCheckbox!);

    if (mockTodo.completed) {
      expect(todoCardElementCheckbox).toBeChecked();
      expect(todoCardElementLabel?.textContent).toContain("✅");
    } else {
      expect(todoCardElementCheckbox).not.toBeChecked();
      expect(todoCardElementLabel?.textContent).toContain("❌");
    }
  });

  // it("should matche with the snapshot", () => {
  //   // screen.debug();
  //   expect(todoComponentElement).toMatchSnapshot();
  // });
});
