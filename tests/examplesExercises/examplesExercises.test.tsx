/* test de prueba para corroborar que las instalaciones y configuraciones están correctamente realizadas */
// describe("Flash Test", () => {
//   test("flash test", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

import {
  Rectangle,
  additionFunction,
  generateExampleEmail,
  returneExampleArrayMix,
  returneExampleArrayNumbers,
  returneExampleArrayObject,
  returneExampleArrayStrings,
  returneExampleFalse,
  returneExampleNull,
  returneExampleObject,
  returneExampleTrue,
  returneExampleUndefined,
} from "../../src/examplesExercises/examplesExercises";

describe("Assertions: Basics with Numbers", () => {
  it("should return correct value, const additionFunction = (a: number, b: number)", () => {
    const result = additionFunction(1, 2); // 3

    expect(result).toBe(3);
    expect(result).toEqual(3);

    /* probar el > mayor y el mayor o igual */
    expect(result).toBeGreaterThan(1);
    expect(result).toBeGreaterThanOrEqual(3);

    /* probar el < menor y el menor o igual*/
    expect(result).toBeLessThan(5);
    expect(result).toBeLessThanOrEqual(3);
  });

  it("should not return correct value, const additionFunction = (a: number, b: number)", () => {
    const result = additionFunction(1, 2); // 3

    expect(result).not.toBe(-1);
    expect(result).not.toEqual(-1);
  });
});

describe("Assertions: Basics with String", () => {
  it("should have an email", () => {
    const fakeEmail = generateExampleEmail(); // example@example.com

    expect(fakeEmail).toBe("example@example.com"); // correo directamente
    expect(fakeEmail).toEqual("example@example.com"); // correo directamente
    expect(fakeEmail).toMatch("example@example.com"); // correo directamente
    expect(fakeEmail).toMatch(/[a-zA-z].[a-zA-z]\.com/); // expresión regular
  });
});

describe("Assertions: Basics with Object", () => {
  it("should have fakeObject1 the same info like fakeObject2", () => {
    const fakeObject1 = returneExampleObject();
    const fakeObject2 = returneExampleObject();

    // expect(fakeObject1).toBe(fakeObject2); // La función .toBe() verifica si dos variables apuntan a la misma referencia de objeto en la memoria, lo cual no es lo mismo que verificar si los contenidos de los objetos son iguales
    expect(fakeObject1).toEqual(fakeObject2); // Para comparar los contenidos de los objetos, se debe usar la función .toEqual()
  });

  it("should fakeObject1 have a key 'name'", () => {
    const fakeObject1 = returneExampleObject();

    expect(fakeObject1).toHaveProperty("name");
  });

  it("should fakeObject1 have a keys 'name' and 'age'", () => {
    const fakeObject1 = returneExampleObject();
    // console.log(Object.keys(fakeObject1));
    // console.log(Object.values(fakeObject1));

    expect(fakeObject1).toHaveProperty("name");
    expect(fakeObject1).toHaveProperty("age");
  });

  it("should fakeObject1 have a key 'name' with value 'Nombre'", () => {
    const fakeObject1 = returneExampleObject();

    expect(fakeObject1).toHaveProperty("name", "Nombre");
  });
});

describe("Assertions: Basics with Arrays", () => {
  it("should be an array and their elements should be the correct type", () => {
    const arrayNumbers = returneExampleArrayNumbers();
    const arrayStrings = returneExampleArrayStrings();
    const arrayMix = returneExampleArrayMix();

    expect(arrayNumbers).toEqual(expect.any(Array)); // Verifica si arrayNumbers es un array
    /* Verifica si cada uno de sus elementos es de tipo number */
    arrayNumbers.forEach((element) => {
      expect(element).toEqual(expect.any(Number));
    });

    expect(arrayStrings).toEqual(expect.any(Array)); // Verifica si arrayStrings es un array
    /* Verifica si cada uno de sus elementos es de tipo string */
    arrayStrings.forEach((element) => {
      expect(element).toEqual(expect.any(String));
    });

    expect(arrayMix).toEqual(expect.any(Array)); // Verifica si arrayMix es un array
    /* Verifica si cada uno de sus elementos es de tipo string o number o boolean. En este caso, estamos utilizando typeof element para obtener el tipo de cada elemento y luego verificamos si ese tipo coincide con alguna de las opciones que deseamos (string, number o boolean) mediante una expresión regular que utilizamos con el método toMatch(/string|number|boolean/). */
    arrayMix.forEach((element) => {
      expect(typeof element).toMatch(/string|number|boolean/);
    });
    expect(arrayMix).toContain("Nombre");
  });

  it("should arrayObjects be an array and their elements should be a object", () => {
    const arrayObjects = returneExampleArrayObject();

    expect(arrayObjects).toEqual(expect.any(Array));

    /* que cada elemento del arreglo sea un objeto */
    arrayObjects.forEach((element) => {
      expect(element).toEqual(expect.any(Object));
    });
  });

  it("should objects in arrayObjects have values that should be 'string | number | boolean' and keys that should be 'id | name | status'", () => {
    const arrayObjects = returneExampleArrayObject();

    expect(arrayObjects).toContainEqual({ status: true });

    /* que cada value dentro del objeto sea 'string | number | boolean' usando una expresión regular */
    arrayObjects.forEach((element) => {
      Object.values(element).forEach((element) => {
        expect(typeof element).toMatch(/string|number|boolean/);
      });
    });

    /* que cada key dentro del objeto sea 'id | name | status' usando una expresión regular */
    arrayObjects.forEach((element) => {
      Object.keys(element).forEach((element) => {
        expect(element).toMatch(/id|name|status/);
      });
    });
  });
});

describe("Assertions: Basics with Boolean", () => {
  it("should be true", () => {
    const result = returneExampleTrue();

    expect(result).toBeTruthy();
  });

  it("should be false", () => {
    const result = returneExampleFalse();

    expect(result).toBeFalsy();
  });

  it("should be null", () => {
    const result = returneExampleNull();

    expect(result).toBeNull();
  });

  it("should be defined", () => {
    const result = 5;

    expect(result).toBeDefined();
  });

  it("should be undefined", () => {
    const result = returneExampleUndefined();

    expect(result).toBeUndefined();
  });
});

describe("Assertions: Basics with Class", () => {
  it("should objectA be an instance of class 'Rectangle'", () => {
    const objectA = new Rectangle(5, 10); // es una instancia de la clase Rectangle
    const objectB = { width: 5, height: 10 }; // es un objeto simple

    expect(objectA).toBeInstanceOf(Rectangle);
    expect(objectB).not.toBeInstanceOf(Rectangle);
  });

  it("should calculate the area of a rectangle correctly", () => {
    const rectangle = new Rectangle(5, 10);
    const area = rectangle.calcArea();

    expect(area).toBe(50);
    expect(area).toEqual(50);
  });
});

describe("Assertions: Mocks Functions", () => {
  it("shoud mockFunction have been called once and its result is '5'", () => {
    const mockFunction = jest.fn(() => 5); // es un mock que siempre devolverá 5
    const mockResult = mockFunction();

    expect(mockFunction).toHaveBeenCalled(); // aquí dará como true porque se está llamando en "const mockResult = mockFunction();"

    expect(mockResult).toBe(5);
    expect(mockResult).toEqual(5);
  });

  it("shoud mockFunction have been called n times", () => {
    const mockFunction = jest.fn(() => 5); // es un mock que siempre devolverá 5
    mockFunction();
    mockFunction();
    mockFunction();

    expect(mockFunction).toHaveBeenCalledTimes(3);
  });

  it("shoud mockFunction have been called once and with props", () => {
    const mockFunction = jest.fn((a: number) => 5 + a); // es un mock que siempre devolverá 5 + a
    const mockResult = mockFunction(1);

    expect(mockFunction).toHaveBeenCalledWith(1);

    expect(mockResult).toBe(6);
    expect(mockResult).toEqual(6);
  });
});
