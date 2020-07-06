const path = require("path")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("frontmatter-markdown-loader")
      .loader("frontmatter-markdown-loader")
  },
  configureWebpack: {
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, "dist"),
              routes: ["/", "/about"],
              renderer: new Renderer({
                executablePath: process.env.GOOGLE_CHROME_BIN
              })
            })
          ]
        : []
  }
}
