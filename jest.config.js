module.exports = {
    rootDir: "./",
    setupFilesAfterEnv: ["./jest.setup.js"],
    verbose: false,
    collectCoverage: true,
    coveragePathIgnorePatterns: ["<rootDir>/test/test-utils.js"],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "^@pages(.*)$": "<rootDir>/pages$1",
        "^@hooks(.*)$": "<rootDir>/hooks$1",
    },
    testEnvironment: "jsdom",
}
