module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'no-console': 'off',
    },
    settings: {
      'import/resolver': {
        alias: [
          ['@', './src'],
          ['@controllers', './src/app/controllers'],
          ['@routes', './src/routes'],
          ['@prismaClient', './src/prisma/client.js'],
        ],
      },
    },
  };