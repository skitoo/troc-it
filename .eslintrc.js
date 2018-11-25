module.exports = {
  root: true,
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
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.dev.js'
      }
    }
  },
  plugins: [
    'vue'
  ],
}
