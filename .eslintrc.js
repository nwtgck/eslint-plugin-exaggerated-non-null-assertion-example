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
        // NOTE: Disable no-extra-non-null-assertion and no-non-null-assertion
        "@typescript-eslint/no-extra-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "exaggerated-non-null-assertion/exaggerated-non-null-assertion": "error",
    }
};
