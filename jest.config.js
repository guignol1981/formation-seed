module.exports = {
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transformIgnorePatterns: ['node_modules/(?!(@ulaval/modul-components)/)'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.stories\\.[t|j]s$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.[t|j]sx?$': ['babel-jest', { rootMode: 'upward' }]
    },
    snapshotSerializers: ['jest-serializer-vue']
};
