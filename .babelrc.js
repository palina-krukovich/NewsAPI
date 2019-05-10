const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
                browsers: [
                    'last 2 versions',
                    'chrome >= 70',
                    'firefox >= 60'
                ],
            },
        },
    ],
];

const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
];

module.exports = {presets, plugins};