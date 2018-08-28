module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: [
    "react"
  ],
  rules: {
    'class-methods-use-this': 0,
    'func-names': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'react/jsx-no-bind': 0,
    'react/no-multi-comp': 0,
    'array-callback-return': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/img-has-alt': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-string-refs': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".md"] }],
    'react/no-array-index-key': 0,
    'react/no-find-dom-node': 0,
    'react/require-extension': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'prefer-destructuring': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-no-comment-textnodes': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-void': 0,
    'no-nested-ternary': 0,
    'mouse-events-have-key-events': 0,
  },
  globals: {
    React: true,
    ReactDOM: true,
    mountNode: true,
    $: true,
    dd: true,
    process: true
  }
}