module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
