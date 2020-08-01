const path = require("path")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const markdownIt = require("markdown-it")
const markdownItPrism = require("markdown-it-prism")

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("frontmatter-markdown-loader")
      .loader("frontmatter-markdown-loader")
      .tap(() => {
        return {
          markdownIt: markdownIt({ html: true }).use(markdownItPrism)
        }
      })
  },
  configureWebpack: {
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, "dist"),
              routes: [
                "/",
                "/scaffolding-phoenix-1-5",
                "/prerender-spa-plugin-in-nixos",
                "/ci-for-vue-via-github-actions"
              ],
              renderer: new Renderer({
                executablePath: process.env.GOOGLE_CHROME_BIN
              })
            })
          ]
        : []
  }
}
