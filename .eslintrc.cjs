module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
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
