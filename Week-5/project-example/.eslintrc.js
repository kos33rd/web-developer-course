module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    'no-nested-ternary': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'complexity': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-no-bind': 'off',
    'no-undef': 'off'

  }
}
