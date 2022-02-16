module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'spaced-comment': ['error', 'always'],
    'no-dupe-keys': ['off'],

    camelcase: ['error', { properties: 'never' }],
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],

  }
}
