module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    "plugin:@typescript-eslint/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project:"./tsconfig.json",
    tsconfigRootDir:"./"
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "no-console": "off",
    "max-len":"off"
  },
};
