export default {
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    })

    return config
  },
  themeConfig: {
    styles: {
      playground: {
        background: "#f4f4f4"
      }
    }
  }
}
