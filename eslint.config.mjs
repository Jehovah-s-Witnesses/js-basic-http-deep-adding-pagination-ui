import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'array-callback-return': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'accessor-pairs': 'error',
      'block-scoped-var': 'error',
      camelcase: ['error'],
      'capitalized-comments': 'error',
      'class-methods-use-this': 'error',
      curly: 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      eqeqeq: 'error',
      'grouped-accessor-pairs': 'error',
      'id-length': [
        2,
        {
          exceptions: ['i', 'j', 'n', '_', 'fs', 'id', 'to', 'Id'],
          min: 3,
          max: 100,
          properties: 'always',
        },
      ],
      'max-nested-callbacks': ['error', 3],
      'new-cap': 'error',
      'no-case-declarations': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-empty-static-block': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-label': 'error',
      'no-global-assign': 'error',
      'no-inline-comments': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-object-constructor': 'error',
      'no-param-reassign': 'error',
      'no-redeclare': 'error',
      'no-return-assign': 'error',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
      // TODO: Enable for projects
      // 'sort-imports': 'errpr'
      yoda: 'error',
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettier,
];
