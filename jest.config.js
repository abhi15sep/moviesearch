module.exports = {
    verbose: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    moduleDirectories: [
        "node_modules",
        "src",
        "test"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFiles: ['whatwg-fetch', "jest-localstorage-mock", "<rootDir>/SetupTests.js"],
    // Disable detailed coverage reporting in console
    coverageReporters: ['json', 'lcov'],
    testURL: 'http://localhost',
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ],
    testResultsProcessor: "./node_modules/jest-html-reporter"
};
