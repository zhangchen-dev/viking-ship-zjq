/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-03-07 09:01:40
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-23 14:46:06
 * @FilePath: \viking-ship\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-useless-constructor': 0,
        '@typescript-eslint/no-unused-vars': 'off',
        // indent: [
        //     'error',
        //     4,
        //     {
        //         ignoredNodes: [
        //             'ConditionalExpression',
        //             'CallExpression > FunctionExpression.callee > BlockStatement.body',
        //         ],
        //     },
        // ],
        'no-useless-constructor': 'off',
        // 'no-console': [
        //     'error',
        //     {
        //         allow: ['warn', 'error'],
        //     },
        // ],
        'space-before-blocks': 2,
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        'space-infix-ops': 2,
        'no-whitespace-before-property': 2,
        'newline-per-chained-call': 2,
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': 2,
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'computed-property-spacing': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
            },
        ],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'only-multiline'],
        semi: ['error', 'always'],
        eqeqeq: ['error', 'always'],
        'no-case-declarations': 'error',
        'nonblock-statement-body-position': ['error', 'beside'],
        'brace-style': 'error',
        'no-else-return': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        camelcase: 'error',
        'new-cap': [
            'error',
            {
                newIsCap: true,
            },
        ],
        'prefer-const': 'error',
        'no-const-assign': 'error',
        'no-multi-assign': 'error',
        'no-new-object': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-array-constructor': 'error',
        'array-callback-return': 'error',
        'no-new-wrappers': 'error',
        'wrap-iife': ['error', 'any'],
        'no-loop-func': 'error',
        'prefer-rest-params': 'error',
        'no-new-func': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'ignore',
                asyncArrow: 'always',
            },
        ],
        'no-param-reassign': 'error',
        'prefer-spread': 'error',
        'function-paren-newline': ['error', 'consistent'],
        'prefer-arrow-callback': 'error',
        'arrow-spacing': 'error',
        'arrow-parens': ['error', 'always'],
        'no-confusing-arrow': 'error',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'import/prefer-default-export': 'off' | 'warn' | 'error',
    },
};
