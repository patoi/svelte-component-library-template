module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        es2020: true,
        browser: true,
        commonjs: true,
        mocha: true,
        node: true,
    },
    plugins: ['svelte3', 'html'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    settings: {},
    extends: ['eslint:recommended', 'prettier'],
}
