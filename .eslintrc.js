module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:vue/recommended'
  ],
  rules: {
    'max-len': [1, 120],
    'no-console': 0,
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};