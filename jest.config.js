module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ["regenerator-runtime/runtime"],
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["<rootDir>/src/*.test.js"],
};
