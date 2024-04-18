# Instalación y configuracion de Jest + React Testing Library (En proyectos de React + Vite + TypeScript)

## Instalaciones:

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript ts-node
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom react-test-renderer ts-jest @testing-library/jest-dom
```

### Opcional: Si usamos Fetch API en el proyecto: (si tienes versión ≥ 18 de node no es necesario porque ya viene implementada pero igual instalarla por si acaso)

```bash
npm install --save-dev whatwg-fetch
```

## Actualizar los scripts del package.json

```json
"scripts: {
  ...
  ...
  ...
  "test": "jest --watchAll",
  "coverage": "jest --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'"
}
```

## Modificar la configuración del ".eslintrc.cjs" para evitar problemas de "'module' is not defined."

```cjs
module.exports = {
  ....
  ....
  ....

  /* Esta configuración establece que el entorno de Jest se aplicará solo a los archivos que se encuentren dentro del directorio tests/ (puedes ajustar la ruta según tu estructura de directorios). */
  overrides: [
    {
      files: ["tests/**/*"], // Ajustar esta ruta según la ubicación de los archivos de prueba
      plugins: ["jest"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
```

## Crear la configuración de babel creando babel.config.js o babel.config.cjs

```cjs
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
};
```

### Opcional, pero eventualmente necesario, crear Jest config y setup:

- ### Configuración de jest.config.js o jest.config.cjs

```cjs
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
```

- ### Configuración de jest.setup.js

```js
import "whatwg-fetch"; // En caso de necesitar la implementación del FetchAPI
...
...
...
```

-Importar en los archivos de test para extender los jest matchers para los expect (una vez instalado "npm install --save-dev @testing-library/jest-dom" y tener por ejemplo el ".toBeChecked()", etc)

```tsx jsx
import "@testing-library/jest-dom";
...
...
...
```
