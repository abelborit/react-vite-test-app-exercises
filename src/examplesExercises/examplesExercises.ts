export const additionFunction = (a: number, b: number) => {
  return a + b;
};

export const generateExampleEmail = () => "example@example.com";

export const returneExampleObject = () => {
  return {
    name: "Nombre",
    age: 55,
  };
};

export const returneExampleArrayNumbers = (): number[] => [1, 2, 3, 4, 5];

export const returneExampleArrayStrings = (): string[] => {
  return ["Nombre", "Apellido", "Edad"];
};
export const returneExampleArrayMix = (): (string | number | boolean)[] => {
  return ["Nombre", 50, "Apellido", 28, true, false];
};
export const returneExampleArrayObject = () => {
  return [{ id: 1 }, { name: "Nombre" }, { status: true }];
};

export const returneExampleTrue = () => true;
export const returneExampleFalse = () => false;
export const returneExampleNull = () => null;
export const returneExampleUndefined = () => undefined;

export class Rectangle {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

  public calcArea = () => {
    return this.width * this.height;
  };
}
