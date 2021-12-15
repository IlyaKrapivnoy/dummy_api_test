module.exports = {
    extends: ['airbnb', 'prettier'],
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react-hooks',
        'prettier',
        'simple-import-sort',
        'autofix',
        'import-order-autofix',
    ],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-duplicate-imports': 'error',
        // 'func-names': ['error', 'never'],
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};