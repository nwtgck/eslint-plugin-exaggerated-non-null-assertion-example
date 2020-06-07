module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "exaggerated-non-null-assertion"
    ],
    "rules": {
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-empty-interface": "error",
        // NOTE: Disable no-extra-non-null-assertion
        "@typescript-eslint/no-extra-non-null-assertion": 0,
        "exaggerated-non-null-assertion/exaggerated-non-null-assertion": "error",
    }
};
