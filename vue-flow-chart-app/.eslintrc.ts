module.exports = {
    root: true,
    env: {
      node: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2021,
    },
    rules: {
      // Define your project-specific rules here
      // Example:
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  