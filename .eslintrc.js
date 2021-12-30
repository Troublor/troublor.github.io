// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'semi': 'off',
    '@typescript-eslint/semi': [
      'error',
    ],
    '@typescript-eslint/no-var-requires': [
      'off',
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
    ],
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        'allow': [
          'arrowFunctions',
        ],
      },
    ],
  },
};
