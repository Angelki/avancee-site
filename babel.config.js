module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "react-hot-loader/babel"
  ]
};
