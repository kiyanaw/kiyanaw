module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-prototype-builtins': 0,
    'no-underscore-dangle': 0,
    semi: ['error', 'never'],
    'max-len': [1, 120],
    'no-console': 0,
    'max-classes-per-file': 0,
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/component-tags-order': ['warn', {
      order: ['template', 'script', 'style'],
    }],
    'vue/no-deprecated-slot-attribute': 0,
    'vue/html-closing-bracket-newline': ['warn', {
      singleline: 'never',
      multiline: 'never',
    }],
  },
}
