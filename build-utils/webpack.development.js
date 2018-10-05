module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
