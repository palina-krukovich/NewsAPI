module.exports = {
    env: {
        'browser': true,
        'es6': true
    },
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    rules: {
        'indent': [
            'error',
            'tab'
        ],
        'semi': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ]
    }
};