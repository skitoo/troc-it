module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "airbnb-base",
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
}
