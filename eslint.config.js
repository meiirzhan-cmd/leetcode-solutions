const prettier = require("eslint-config-prettier");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                console: "readonly",
                module: "readonly",
                require: "readonly",
                exports: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                process: "readonly",
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-constant-condition": "warn",
            "no-duplicate-case": "error",
            "no-empty": "warn",
            "no-redeclare": "error",
            "no-unreachable": "warn",
            eqeqeq: "warn",
            "no-var": "warn",
            "prefer-const": "warn",
        },
    },
    prettier,
];
