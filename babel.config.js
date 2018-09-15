module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow"
  ],
  "plugins": [
    "universal-import",
    "react-hot-loader/babel",
    "babel-plugin-macros",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-optional-chaining"
  ]
}
