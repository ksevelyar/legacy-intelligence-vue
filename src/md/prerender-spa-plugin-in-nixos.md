---
title: prerender-spa-plugin in NixOS
tags:
  - webpack
  - nixos
  - js
---

# `prerender-spa-plugin` in NixOS

The plugin downloads dynamically linked Chrome. It's not gonna work in NixOS, but it's possible to install Chrome via `shell.nix`:

`nvim shell.nix`

```
with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "node-env";
  buildInputs = [
    google-chrome
  ];
  GOOGLE_CHROME_BIN = "${google-chrome}/bin/google-chrome-stable";
}
```

```
echo $GOOGLE_CHROME_BIN
/nix/store/y398naycdahwxcr7kg80kqg6smb94qn8-google-chrome-83.0.4103.116/bin/google-chrome-stable
```

Let's use the ENV varible inside Webpack:

`nvim vue.config.js`

```javascript
const path = require("path")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
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
```
