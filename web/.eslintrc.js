module.exports = { 
  parser: '@typescript-eslint/parser', 
  plugins: ['@typescript-eslint/eslint-plugin'], 
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': 'error',
    'import/named': 'error',
  },
  ignorePatterns: ['.eslintrc.js'],
}
